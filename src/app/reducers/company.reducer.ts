import { Action, State } from '@ngrx/store';
import * as CompanyActions from './../actions/company.actions';

export function companyReducer(state = [], action: CompanyActions.ActionUnion) {
    switch (action.type) {
        case CompanyActions.ActionTypes.LOAD_COMPANIES_SUCCESS:
            return action.payload;
            break;
        default:
            return state;
            break;
    }
}
