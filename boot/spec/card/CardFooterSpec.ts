import React from "react";
import {CommonAttributes} from "../common/common-attrs";
import BootstrapReactComponent, {BootstrapUIState} from "../common/spec-common-things";


export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement>, CommonAttributes {
    children?: any
}


export default class CardFooterSpec<P extends CardFooterProps, S extends BootstrapUIState> extends BootstrapReactComponent<P, S> {}