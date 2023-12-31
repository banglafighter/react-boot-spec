import {CommonAttributes} from "../common/common-attrs";
import {Color} from "../common/common-type";
import BootstrapReactComponent, {BootstrapUIState} from "../common/spec-common-things";


export interface TableHeadProps extends CommonAttributes {
    children?: any
    color?: Color
}


export default class TableHeadSpec<P extends TableHeadProps, S extends BootstrapUIState> extends BootstrapReactComponent<P, S> {}