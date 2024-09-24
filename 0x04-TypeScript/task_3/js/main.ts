import { rowElement, rowId } from './interface';
import * as CRUD from './crud.js';

const row: rowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva'
}

const newRowId: rowId = CRUD.insertRow(row);
const updatedRow: rowElement = { age: 23, ...row };

CRUD.updatedRow(newRowId, updatedRow);
CRUD.deleteRow(newRowId);