import React from "react";
import {FieldWrappingProps, InputCommonProps} from "./InputSpec";
import {CommonEvent} from "./common/common-attrs";
import PFBSReactComponent, {BootstrapUIState} from "./common/spec-common-things";

export interface TextFieldProps extends FieldWrappingProps, InputCommonProps, CommonEvent {

}


export default class TextFieldSpec<P extends TextFieldProps, S extends BootstrapUIState> extends PFBSReactComponent<P, S> {}