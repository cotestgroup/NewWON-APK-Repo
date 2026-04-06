import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API routes
  app.get("/api/apks", async (req, res) => {
    const { NEXUS_URL, NEXUS_USERNAME, NEXUS_PASSWORD, NEXUS_REPOSITORY } = process.env;

    if (!NEXUS_URL || !NEXUS_REPOSITORY) {
      return res.status(500).json({ error: "Nexus configuration missing" });
    }

    try {
      // Nexus REST API for assets (Public Repository)
      const nexusApiUrl = `${NEXUS_URL}/service/rest/v1/assets?repository=${NEXUS_REPOSITORY}`;

      const response = await fetch(nexusApiUrl, {
        headers: {
          "Accept": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error(`Nexus API error: ${response.statusText}`);
      }

      const data = await response.json();
      
      // Filter and map assets to our APKArtifact format
      // Path format: mbw-adm-online/SNAPSHOT+34bd530/mbw-adm-online-SNAPSHOT+34bd530.apk
      const apks = data.items
        .filter((item: any) => item.path.endsWith(".apk"))
        .map((item: any) => {
          const pathParts = item.path.split("/");
          const fileName = pathParts[pathParts.length - 1];
          const version = pathParts[pathParts.length - 2] || "unknown";

          return {
            id: item.id,
            name: fileName,
            version: version,
            buildNumber: version.split("+")[1] || "0",
            timestamp: new Date(item.lastModified).toLocaleString("vi-VN"),
            size: (item.fileSize / (1024 * 1024)).toFixed(1) + " MB",
            type: fileName.includes("debug") ? "debug" : "release",
            buildId: item.checksum.sha1 || "N/A",
            downloadUrl: item.downloadUrl,
            rawSize: item.fileSize,
            rawDate: new Date(item.lastModified).getTime()
          };
        });

      // Calculate stats
      const totalBytes = apks.reduce((acc: number, apk: any) => acc + apk.rawSize, 0);
      const uniqueVersions = new Set(apks.map((apk: any) => apk.version)).size;
      const latestSync = apks.length > 0 
        ? new Date(Math.max(...apks.map((apk: any) => apk.rawDate))).toLocaleTimeString("vi-VN", { hour: '2-digit', minute: '2-digit' })
        : "N/A";

      const stats = {
        totalStorage: (totalBytes / (1024 * 1024)).toFixed(1) + " MB",
        activeBranches: uniqueVersions,
        lastSync: latestSync
      };

      res.json({ apks, stats });
    } catch (error: any) {
      console.error("Error fetching from Nexus:", error);
      res.status(500).json({ error: error.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
