import {React} from "react-rapid-app";
import {Size} from "./common/common-type";
import BootstrapReactComponent, {BootstrapUIState} from "./common/spec-common-things";

export type ButtonType = 'button' | 'reset' | 'submit'
export type Variant = 'primary' | 'secondary' | 'danger'  | 'warning' | 'info' | 'light' | 'dark' | 'link' | 'success'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    type?: ButtonType
    variant?: Variant
    viewSize?: Size
    className?: string
    disabled?: boolean
}


export default class ButtonSpec<P extends ButtonProps, S extends BootstrapUIState> extends BootstrapReactComponent<P, S> {

}