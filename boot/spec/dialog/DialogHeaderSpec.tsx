import BootstrapReactComponent, {BootstrapUIState} from "../common/spec-common-things";

export interface DialogHeaderProps {
    children?: any
}


export default class DialogHeaderSpec<P extends DialogHeaderProps, S extends BootstrapUIState> extends BootstrapReactComponent<P, S> {}