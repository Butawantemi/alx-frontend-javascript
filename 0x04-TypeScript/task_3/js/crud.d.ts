import { rowElement, rowId } from "./interface";

export declare function insertRow(row: rowElement): rowId;
export declare function deleteRow(rowId: rowId): void;
export declare function updatedRow(rowId: rowId, row: rowElement): rowId;