import { ConstructLibraryCdktf } from 'projen/lib/cdktf';
import { NpmAccess } from 'projen/lib/javascript';

const project = new ConstructLibraryCdktf({
  author: 'awlsring',
  authorAddress: 'mattcanemail@gmail.com',
  cdktfVersion: '^0.14.3',
  constructsVersion: '^10.1.52',
  defaultReleaseBranch: 'main',
  name: 'cdktf-surreal-backend',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/awlsring/cdktf-surreal-backend.git',
  description: 'A package that vends a construct to setup the surreal backend in CDKTF',
  packageName: '@awlsring/cdktf-surreal-backend',
  releaseToNpm: true,
  keywords: [
    'cdktf',
    'surrealdb',
    'backend',
  ],
  deps: [
    'constructs@^10.1.52',
  ],
  devDeps: [
    'constructs@10.1.52',
  ],
  gitignore: [
    '.DS_Store',
    '**/*.js',
    '**/*.d.ts',
    'package-lock.json',
    'yarn.lock',
    '/test/__snapshots__/',
    '.gen',
    '.vscode',
    'cdktf.out',
    'terraform*',
    '.terraform*',
    'cdktf.json',
  ],
  autoApproveUpgrades: true,
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['awlsring', 'github-actions'],
  },
  githubOptions: {
    projenTokenSecret: 'PROJEN_GITHUB_TOKEN',
  },
  publishToPypi: {
    distName: 'cdktf-surreal-backend',
    module: 'cdktf_surreal_backend',
  },
  npmAccess: NpmAccess.PUBLIC,
});
project.synth();