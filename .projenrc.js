const { cdktf } = require('projen');
const { NpmAccess } = require('projen/lib/javascript');
const project = new cdktf.ConstructLibraryCdktf({
  author: 'awlsring',
  authorAddress: 'mattcanemail@gmail.com',
  cdktfVersion: '^0.13.2',
  defaultReleaseBranch: 'main',
  name: 'cdktf-surreal-backend',
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
    'constructs@^10.1.52',
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
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['awlsring'],
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