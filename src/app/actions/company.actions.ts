import { Action } from '@ngrx/store';

import { ICompany } from '../models/ICompany';

export enum ActionTypes {
    LOAD_COMPANIES = '[Companies List Page] LOAD_COMPANIES',
    LOAD_COMPANIES_SUCCESS = '[Companies List Page] LOAD_COMPANIES_SUCCESS'
}

// export const LOAD_COMPANIES = 'LOAD_COMPANIES';
// export const LOAD_COMPANIES_SUCCESS = 'LOAD_COMPANIES_SUCCESS';

// No need for the payload as this class will not decide success or failure.
export class LoadCompaniesAction implements Action {
    readonly type = ActionTypes.LOAD_COMPANIES;
    constructor() { }
}

// This class will have a payload property as this will be the actual calling of the load companies
export class LoadCompaniesSuccessAction implements Action {
    readonly type = ActionTypes.LOAD_COMPANIES_SUCCESS;
    constructor(public payload: ICompany[]) { }
}

export type ActionUnion = LoadCompaniesAction | LoadCompaniesSuccessAction;
