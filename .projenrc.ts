import { AwlsringCdktfLibrary } from '@awlsring/projen-commons';

const project = new AwlsringCdktfLibrary({
  cdktfVersion: '^0.14.0',
  constructsVersion: '^10.0.25',
  majorVersion: 1,
  name: 'cdktf-surreal-backend',
  repositoryUrl: 'https://github.com/awlsring/cdktf-surreal-backend.git',
  description: 'A package that vends a construct to setup the surreal backend in CDKTF',
  keywords: [
    'cdktf',
    'surrealdb',
    'backend',
  ],
  publish: true,
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
});
project.synth();