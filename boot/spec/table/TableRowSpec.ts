import {React} from "react-rapid-app";
import {CommonAttributes} from "../common/common-attrs";
import BootstrapReactComponent, {BootstrapUIState} from "../common/spec-common-things";


export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement>, CommonAttributes {
    children?: any
}


export default class TableRowSpec<P extends TableRowProps, S extends BootstrapUIState> extends BootstrapReactComponent<P, S> {}