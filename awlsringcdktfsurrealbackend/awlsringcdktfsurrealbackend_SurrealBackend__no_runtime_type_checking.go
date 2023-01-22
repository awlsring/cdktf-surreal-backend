//go:build no_runtime_type_checking

// A package that vends a construct to setup the surreal backend in CDKTF
package awlsringcdktfsurrealbackend

// Building without runtime type checking enabled, so all the below just return nil

func (s *jsiiProxy_SurrealBackend) validateAddOverrideParameters(path *string, value interface{}) error {
	return nil
}

func (s *jsiiProxy_SurrealBackend) validateGetRemoteStateDataSourceParameters(scope constructs.Construct, name *string, _fromStack *string) error {
	return nil
}

func (s *jsiiProxy_SurrealBackend) validateOverrideLogicalIdParameters(newLogicalId *string) error {
	return nil
}

func validateSurrealBackend_IsBackendParameters(x interface{}) error {
	return nil
}

func validateSurrealBackend_IsConstructParameters(x interface{}) error {
	return nil
}

func validateSurrealBackend_IsTerraformElementParameters(x interface{}) error {
	return nil
}

func validateNewSurrealBackendParameters(scope constructs.Construct, props *SurrealBackendProps) error {
	return nil
}

