// A package that vends a construct to setup the surreal backend in CDKTF
package awlsringcdktfsurrealbackend


type SurrealBackendProps struct {
	Address *string `field:"required" json:"address" yaml:"address"`
	Password *string `field:"required" json:"password" yaml:"password"`
	Project *string `field:"required" json:"project" yaml:"project"`
	Stack *string `field:"required" json:"stack" yaml:"stack"`
	Username *string `field:"required" json:"username" yaml:"username"`
	SkipCertVerification *bool `field:"optional" json:"skipCertVerification" yaml:"skipCertVerification"`
}

