import {CommonAttributes} from "./common/common-attrs";
import BootstrapReactComponent, {BootstrapUIState} from "./common/spec-common-things";

export interface PaginationProps extends CommonAttributes {
    totalPage: number
    currentPage: number
    itemPerPage: number
    onChangePagination?: (event: any, pageNumber: number) => void;
    onChangeItemPerPage?: (event: any, itemPerPage: number) => void;
}


export default class PaginationSpec<P extends PaginationProps, S extends BootstrapUIState> extends BootstrapReactComponent<P, S> {}