import { AwlsringCdktfLibrary } from '@awlsring/projen-commons';

const project = new AwlsringCdktfLibrary({
  cdktfVersion: '^0.14.3',
  constructsVersion: '^10.1.52',
  majorVersion: 1,
  name: 'cdktf-surreal-backend',
  repositoryUrl: 'https://github.com/awlsring/cdktf-surreal-backend.git',
  description: 'A package that vends a construct to setup the surreal backend in CDKTF',
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