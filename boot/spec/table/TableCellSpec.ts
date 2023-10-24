import {React} from "react-rapid-app";
import {CommonAttributes} from "../common/common-attrs";
import BootstrapReactComponent, {BootstrapUIState} from "../common/spec-common-things";


export interface TableCellProps extends React.HTMLAttributes<HTMLTableCellElement>, CommonAttributes {
    children?: any
}


export default class TableCellSpec<P extends TableCellProps, S extends BootstrapUIState> extends BootstrapReactComponent<P, S> {}