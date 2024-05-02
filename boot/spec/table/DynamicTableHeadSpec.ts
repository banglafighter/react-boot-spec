import {CommonAttributes} from "../common/common-attrs";
import {Color} from "../common/common-type";
import BootstrapReactComponent, {BootstrapUIState} from "../common/spec-common-things";

export type SortDirection = 'asc' | 'desc'

export interface DynamicTableHeadColumn extends CommonAttributes {
    displayName?: any
    fieldName?: string
    isSortAble?: boolean
    isActionColumn?: boolean
}

export interface DynamicTableHeadProps {
    currentSortFieldName?: string
    columns: Array<DynamicTableHeadColumn>
    color?: Color
    onClickSort?: (event: any, sortDirection: SortDirection, fieldName?: string) => void;
}


export default class DynamicTableHeadSpec<P extends DynamicTableHeadProps, S extends BootstrapUIState> extends BootstrapReactComponent<P, S> {}