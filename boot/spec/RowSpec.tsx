import {React} from "react-rapid-app";
import {CommonAttributes} from "./common/common-attrs";
import BootstrapReactComponent, {BootstrapUIState} from "./common/spec-common-things";

export interface RowProps extends React.HTMLAttributes<HTMLDivElement>, CommonAttributes {
    children?: any
}


export default class RowSpec<P extends RowProps, S extends BootstrapUIState> extends BootstrapReactComponent<P, S> {}