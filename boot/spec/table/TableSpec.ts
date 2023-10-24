import {React} from "react-rapid-app";
import {CommonAttributes} from "../common/common-attrs";
import {Align, Color} from "../common/common-type";
import BootstrapReactComponent, {BootstrapUIState} from "../common/spec-common-things";

export type Variant = 'striped' | 'bordered' | 'borderless'
export type Size = 'default' | 'small'



export interface TableProps extends React.HTMLAttributes<HTMLTableElement>, CommonAttributes {
    children?: any
    isHoverEffectInRow?: boolean
    color?: Color
    variant?: Variant
    viewSize?: Size
    verticalAlign?: Align
}


export default class TableSpec<P extends TableProps, S extends BootstrapUIState> extends BootstrapReactComponent<P, S> {}