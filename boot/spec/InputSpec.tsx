import React from "react";
import {Size} from "./common/common-type";
import {CommonAttributes} from "./common/common-attrs";
import PFBSReactComponent, {BootstrapUIState} from "./common/spec-common-things";

export type InputType =
    'text'
    | 'email'
    | 'checkbox'
    | 'color'
    | 'file'
    | 'date'
    | 'datetime-local'
    | 'hidden'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'tel'
    | 'time'
    | 'url'
    | 'week'
    | 'switch'
    | 'textarea'

export interface InputCommonProps extends FieldCommonProps, CommonAttributes, ToggleInputProps {
    type?: InputType
    rows?: string
    cols?: string
}

export interface InputProps extends InputCommonProps, React.HTMLAttributes<HTMLInputElement> {}


export default class InputSpec<P extends InputProps, S extends BootstrapUIState> extends PFBSReactComponent<P, S> {

}

export interface ToggleInputProps {
    checked?: boolean
}

export interface FieldCommonProps {
    viewSize?: Size
    readOnly?: boolean
    disabled?: boolean
    placeholder?: string
    required?: boolean
    value?: unknown
    name?: string
    autoComplete?: string
    autoFocus?: boolean
}

export interface FieldWrappingProps {
    label?: React.ReactNode;
    labelClass?: string
    error?: boolean
    wasValidated?: boolean
    helperText?: React.ReactNode
    errorText?: React.ReactNode
    successText?: React.ReactNode
    defaultValue?: any
    beforeInput?: any
    afterInput?: any
    wrapperClass?: string
    addWrapperClass?: string
}