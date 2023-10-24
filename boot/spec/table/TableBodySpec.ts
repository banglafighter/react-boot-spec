import {CommonAttributes} from "../common/common-attrs";
import BootstrapReactComponent, {BootstrapUIState} from "../common/spec-common-things";


export interface TableBodyProps extends CommonAttributes {
    children?: any
}


export default class TableBodySpec<P extends TableBodyProps, S extends BootstrapUIState> extends BootstrapReactComponent<P, S> {}