import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { }

  public getCompanies(): Observable<any> {
    return null;
  }

  public deleteCompany(companyId: number): Observable<any> {
    return null;
  }
}
