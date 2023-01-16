# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SurrealBackend <a name="SurrealBackend" id="@awlsring/cdktf-surreal-backend.SurrealBackend"></a>

#### Initializers <a name="Initializers" id="@awlsring/cdktf-surreal-backend.SurrealBackend.Initializer"></a>

```typescript
import { SurrealBackend } from '@awlsring/cdktf-surreal-backend'

new SurrealBackend(scope: Construct, props: SurrealBackendProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awlsring/cdktf-surreal-backend.SurrealBackend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@awlsring/cdktf-surreal-backend.SurrealBackend.Initializer.parameter.props">props</a></code> | <code><a href="#@awlsring/cdktf-surreal-backend.SurrealBackendProps">SurrealBackendProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@awlsring/cdktf-surreal-backend.SurrealBackend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `props`<sup>Required</sup> <a name="props" id="@awlsring/cdktf-surreal-backend.SurrealBackend.Initializer.parameter.props"></a>

- *Type:* <a href="#@awlsring/cdktf-surreal-backend.SurrealBackendProps">SurrealBackendProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@awlsring/cdktf-surreal-backend.SurrealBackend.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@awlsring/cdktf-surreal-backend.SurrealBackend.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@awlsring/cdktf-surreal-backend.SurrealBackend.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@awlsring/cdktf-surreal-backend.SurrealBackend.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@awlsring/cdktf-surreal-backend.SurrealBackend.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@awlsring/cdktf-surreal-backend.SurrealBackend.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@awlsring/cdktf-surreal-backend.SurrealBackend.getRemoteStateDataSource">getRemoteStateDataSource</a></code> | Creates a TerraformRemoteState resource that accesses this backend. |

---

##### `toString` <a name="toString" id="@awlsring/cdktf-surreal-backend.SurrealBackend.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@awlsring/cdktf-surreal-backend.SurrealBackend.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@awlsring/cdktf-surreal-backend.SurrealBackend.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@awlsring/cdktf-surreal-backend.SurrealBackend.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@awlsring/cdktf-surreal-backend.SurrealBackend.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@awlsring/cdktf-surreal-backend.SurrealBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@awlsring/cdktf-surreal-backend.SurrealBackend.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@awlsring/cdktf-surreal-backend.SurrealBackend.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@awlsring/cdktf-surreal-backend.SurrealBackend.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getRemoteStateDataSource` <a name="getRemoteStateDataSource" id="@awlsring/cdktf-surreal-backend.SurrealBackend.getRemoteStateDataSource"></a>

```typescript
public getRemoteStateDataSource(scope: Construct, name: string, _fromStack: string): TerraformRemoteState
```

Creates a TerraformRemoteState resource that accesses this backend.

###### `scope`<sup>Required</sup> <a name="scope" id="@awlsring/cdktf-surreal-backend.SurrealBackend.getRemoteStateDataSource.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `name`<sup>Required</sup> <a name="name" id="@awlsring/cdktf-surreal-backend.SurrealBackend.getRemoteStateDataSource.parameter.name"></a>

- *Type:* string

---

###### `_fromStack`<sup>Required</sup> <a name="_fromStack" id="@awlsring/cdktf-surreal-backend.SurrealBackend.getRemoteStateDataSource.parameter._fromStack"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@awlsring/cdktf-surreal-backend.SurrealBackend.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@awlsring/cdktf-surreal-backend.SurrealBackend.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@awlsring/cdktf-surreal-backend.SurrealBackend.isBackend">isBackend</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@awlsring/cdktf-surreal-backend.SurrealBackend.isConstruct"></a>

```typescript
import { SurrealBackend } from '@awlsring/cdktf-surreal-backend'

SurrealBackend.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@awlsring/cdktf-surreal-backend.SurrealBackend.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@awlsring/cdktf-surreal-backend.SurrealBackend.isTerraformElement"></a>

```typescript
import { SurrealBackend } from '@awlsring/cdktf-surreal-backend'

SurrealBackend.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@awlsring/cdktf-surreal-backend.SurrealBackend.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isBackend` <a name="isBackend" id="@awlsring/cdktf-surreal-backend.SurrealBackend.isBackend"></a>

```typescript
import { SurrealBackend } from '@awlsring/cdktf-surreal-backend'

SurrealBackend.isBackend(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@awlsring/cdktf-surreal-backend.SurrealBackend.isBackend.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awlsring/cdktf-surreal-backend.SurrealBackend.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@awlsring/cdktf-surreal-backend.SurrealBackend.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@awlsring/cdktf-surreal-backend.SurrealBackend.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@awlsring/cdktf-surreal-backend.SurrealBackend.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@awlsring/cdktf-surreal-backend.SurrealBackend.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@awlsring/cdktf-surreal-backend.SurrealBackend.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@awlsring/cdktf-surreal-backend.SurrealBackend.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@awlsring/cdktf-surreal-backend.SurrealBackend.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---


## Structs <a name="Structs" id="Structs"></a>

### SurrealBackendProps <a name="SurrealBackendProps" id="@awlsring/cdktf-surreal-backend.SurrealBackendProps"></a>

#### Initializer <a name="Initializer" id="@awlsring/cdktf-surreal-backend.SurrealBackendProps.Initializer"></a>

```typescript
import { SurrealBackendProps } from '@awlsring/cdktf-surreal-backend'

const surrealBackendProps: SurrealBackendProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awlsring/cdktf-surreal-backend.SurrealBackendProps.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@awlsring/cdktf-surreal-backend.SurrealBackendProps.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@awlsring/cdktf-surreal-backend.SurrealBackendProps.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@awlsring/cdktf-surreal-backend.SurrealBackendProps.property.stack">stack</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@awlsring/cdktf-surreal-backend.SurrealBackendProps.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@awlsring/cdktf-surreal-backend.SurrealBackendProps.property.skipCertVerification">skipCertVerification</a></code> | <code>boolean</code> | *No description.* |

---

##### `address`<sup>Required</sup> <a name="address" id="@awlsring/cdktf-surreal-backend.SurrealBackendProps.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@awlsring/cdktf-surreal-backend.SurrealBackendProps.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@awlsring/cdktf-surreal-backend.SurrealBackendProps.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `stack`<sup>Required</sup> <a name="stack" id="@awlsring/cdktf-surreal-backend.SurrealBackendProps.property.stack"></a>

```typescript
public readonly stack: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@awlsring/cdktf-surreal-backend.SurrealBackendProps.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `skipCertVerification`<sup>Optional</sup> <a name="skipCertVerification" id="@awlsring/cdktf-surreal-backend.SurrealBackendProps.property.skipCertVerification"></a>

```typescript
public readonly skipCertVerification: boolean;
```

- *Type:* boolean

---



