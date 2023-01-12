import { HttpBackend } from 'cdktf';
import { Construct } from 'constructs';

export interface SurrealBackendProps {
  readonly address: string;
  readonly username: string;
  readonly password: string;
  readonly project: string;
  readonly stack: string;
  readonly skipCertVerification?: boolean;
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
