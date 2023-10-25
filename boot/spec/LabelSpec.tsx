import {React} from "react-rapid-app";
import RapidBSReactComponent, {BootstrapUIState} from "./common/spec-common-things";

export interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {}


export default class LabelSpec<P extends LabelProps, S extends BootstrapUIState> extends RapidBSReactComponent<P, S> {}