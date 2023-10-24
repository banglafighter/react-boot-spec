import {VariousSize} from "./common/common-type";
import {CommonAttributes} from "./common/common-attrs";
import BootstrapReactComponent , {BootstrapUIState} from "./common/spec-common-things";

export type ContainerType = VariousSize | "fluid"

export interface ContainerProps extends CommonAttributes {
    type?: ContainerType
    children?: any
}


export default class ContainerSpec<P extends ContainerProps, S extends BootstrapUIState> extends BootstrapReactComponent<P, S> {}