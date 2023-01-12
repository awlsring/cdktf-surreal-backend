const { cdktf } = require('projen');
const { NpmAccess } = require('projen/lib/javascript');
const project = new cdktf.ConstructLibraryCdktf({
  author: 'awlsring',
  authorAddress: 'mattcanemail@gmail.com',
  cdktfVersion: '^0.13.2',
  constructsVersion: '^10.1.52',
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
  npmAccess: NpmAccess.PUBLIC,
});
project.synth();