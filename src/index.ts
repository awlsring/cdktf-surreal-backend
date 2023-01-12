import { HttpBackend } from 'cdktf';
import { Construct } from 'constructs';

export interface SurrealBackendProps {
  address: string;
  username: string;
  password: string;
  project: string;
  stack: string;
  skipCertVerification?: boolean;
}

export class SurrealBackend extends HttpBackend {
  constructor(scope: Construct, props: SurrealBackendProps) {
    const address = `${props.address}/${props.project}/${props.stack}`;
    super(scope, {
      address: address,
      lockAddress: address,
      unlockAddress: address,
      skipCertVerification: props.skipCertVerification,
      username: props.username,
      password: props.password,
    });
  }
}
