import {React} from "react-rapid-app";
import {CommonAttributes} from "./common/common-attrs";
import BootstrapReactComponent, {BootstrapUIState} from "./common/spec-common-things";

export interface ColumnProps extends React.HTMLAttributes<HTMLDivElement>, CommonAttributes {
    children?: any
    span?: number
    spanSmall?: number
    spanMedium?: number
    spanLarge?: number
    spanExtraLarge?: number
    spanTooExtraLarge?: number
}


export default class ColumnSpec<P extends ColumnProps, S extends BootstrapUIState> extends BootstrapReactComponent<P, S> {}