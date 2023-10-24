import React from "react";
import {CommonAttributes} from "./common/common-attrs";
import PFBSReactComponent, {BootstrapUIState} from "./common/spec-common-things";

export interface RowProps extends React.HTMLAttributes<HTMLDivElement>, CommonAttributes {
    children?: any
}


export default class RowSpec<P extends RowProps, S extends BootstrapUIState> extends PFBSReactComponent<P, S> {}