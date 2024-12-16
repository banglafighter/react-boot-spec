import RapidBSReactComponent, {BootstrapUIState} from "./common/spec-common-things";

export interface DropdownProps {
    itemList: Array<any>
    wrapperPlaceholder: any
    itemLoopCallBack?: (item: any, key: any) => any;
    wrapperTagName?: string
    itemTagName?: string
    wrapperClassName?: string
    wrapperId?: string
    itemClassName?: string
    itemId?: string
    enableSelectValue?: boolean
    itemOnClick?: (clickedItem: any, index: any, itemList: any) => any;
}


export default class DropdownSpec<P extends DropdownProps, S extends BootstrapUIState> extends RapidBSReactComponent<P, S> {}