import BootstrapReactComponent, {BootstrapUIState} from "../common/spec-common-things";

export interface DialogContentProps {
    children?: any
}


export default class DialogContentSpec<P extends DialogContentProps, S extends BootstrapUIState> extends BootstrapReactComponent<P, S> {}