import { APKArtifact, RepoStats } from './types';

export const MOCK_APKS: APKArtifact[] = [
  {
    id: '1',
    name: 'app-release-v1.2.8.apk',
    version: 'v1.2.8',
    buildNumber: '4829',
    timestamp: '14:30:15 24/10/2023',
    size: '42.5 MB',
    type: 'release',
    buildId: '7f8a...9c2d'
  },
  {
    id: '2',
    name: 'app-debug-v1.2.7-rc2.apk',
    version: 'v1.2.7-rc2',
    buildNumber: '4825',
    timestamp: '09:15:42 24/10/2023',
    size: '45.1 MB',
    type: 'debug',
    buildId: 'a1b2...c3d4'
  },
  {
    id: '3',
    name: 'app-release-v1.2.6.apk',
    version: 'v1.2.6',
    buildNumber: '4812',
    timestamp: '18:20:00 23/10/2023',
    size: '42.2 MB',
    type: 'release',
    buildId: 'e5f6...g7h8'
  },
  {
    id: '4',
    name: 'app-release-v1.2.5.apk',
    version: 'v1.2.5',
    buildNumber: '4790',
    timestamp: '11:45:10 21/10/2023',
    size: '41.8 MB',
    type: 'release',
    buildId: 'i9j0...k1l2'
  },
  {
    id: '5',
    name: 'app-release-v1.2.4.apk',
    version: 'v1.2.4',
    buildNumber: '4775',
    timestamp: '15:10:22 20/10/2023',
    size: '41.5 MB',
    type: 'release',
    buildId: 'm3n4...o5p6'
  }
];

export const REPO_STATS: RepoStats = {
  totalStorage: '1.2GB',
  activeBranches: 12,
  lastSync: 'Now'
};
