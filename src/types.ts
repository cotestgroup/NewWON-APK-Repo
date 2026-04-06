export interface APKArtifact {
  id: string;
  name: string;
  version: string;
  buildNumber: string;
  timestamp: string;
  size: string;
  type: 'release' | 'debug';
  buildId?: string;
  downloadUrl?: string;
}

export interface RepoStats {
  totalStorage: string;
  activeBranches: number;
  lastSync: string;
}
