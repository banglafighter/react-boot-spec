import {React} from "react-rapid-app";
import PFBSReactComponent, {BootstrapUIState} from "./common/spec-common-things";

export interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {}


export default class LabelSpec<P extends LabelProps, S extends BootstrapUIState> extends PFBSReactComponent<P, S> {}