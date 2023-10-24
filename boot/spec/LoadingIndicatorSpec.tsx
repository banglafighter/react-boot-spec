import {PrimeColor} from "./common/common-type";
import BootstrapReactComponent, {BootstrapUIState} from "./common/spec-common-things";

export interface LoadingIndicatorProps {
    viewColor?: PrimeColor
}


export default class LoadingIndicatorSpec<P extends LoadingIndicatorProps, S extends BootstrapUIState> extends BootstrapReactComponent<P, S> {}