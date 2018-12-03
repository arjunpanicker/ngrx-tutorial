import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  public companies$: Observable<any>;

  constructor( private companyService: CompanyService ) { }

  public ngOnInit() {
    this.getCompanies();
  }

  public deleteCompany(companyId: number) {
    this.companyService.deleteCompany(companyId)
      .subscribe(() => this.getCompanies());
  }

  private getCompanies() {
    this.companies$ = this.companyService.getCompanies();
  }

}
