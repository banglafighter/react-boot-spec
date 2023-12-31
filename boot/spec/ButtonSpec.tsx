import React from "react";
import {Size} from "./common/common-type";
import PFBSReactComponent, {BootstrapUIState} from "./common/spec-common-things";

export type ButtonType = 'button' | 'reset' | 'submit'
export type Variant = 'primary' | 'secondary' | 'danger'  | 'warning' | 'info' | 'light' | 'dark' | 'link'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    type?: ButtonType
    variant?: Variant
    viewSize?: Size
    className?: string
    disabled?: boolean
}


export default class ButtonSpec<P extends ButtonProps, S extends BootstrapUIState> extends PFBSReactComponent<P, S> {

}