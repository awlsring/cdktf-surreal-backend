import { App, TerraformStack } from 'cdktf';
import { SurrealBackend } from '../src';

test('create', () => {
  const app = new App();
  const stack = new TerraformStack(app, 'test');
  const backend = new SurrealBackend(stack, {
    address: 'https://surreal.example.com',
    username: 'terraform',
    password: 'alligator3',
    project: 'proj',
    stack: 'stack',
  });
  expect(backend).toBeDefined();
});