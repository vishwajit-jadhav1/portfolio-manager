import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
interface userProfileData {
  address?: string
  id?: number,
  firstName: string,
  status?: string,
  _id?: string | number,
  workPhone: number,
  eMail: string,
  lastName: string
}
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  showSaveButton: boolean = false;
  showActivateButton: boolean = false;
  showRetireButton: boolean = false;
  showReviseButton: boolean = false;

  data = {
    address: "",
    id: 0,
    firstName: "",
    lastName: "",
    workPhone: "",
    _id: 0,
    eMail: '',
    name: ""
  }
  constructor(private service: AppService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }
  onSubmit() {

  }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getData("cstPeoplePortfolioAssociatedVJQRDS", id)
  }

  async getData(dataSource: string, id: any) {
    const response = await this.service.getApiData(dataSource, id)
    this.data = response.data
    this.recordDataLoad(response)
  }


  async activateTransaction() {
    await this.service.stateTransaction(this.data, 'cstPeoplePortfolioVJQRDS', 'createNewPortfolioRecordAGVJ', 'activateRecord')
    this.router.navigate(['dashboard']);
  }

  async saveTransaction() {
    await this.service.stateTransaction(this.data, 'cstPeoplePortfolioVJQRDS', 'createNewPortfolioRecordAGVJ', 'cstSaveRecordVj')
    this.router.navigate(['dashboard']);
  }


  async retireTransaction() {
    await this.service.stateTransaction(this.data, 'cstPeoplePortfolioVJQRDS', 'createNewPortfolioRecordAGVJ', 'triRetireRecordVj')
    this.router.navigate(['dashboard']);
  }


  async reviceTransaction() {
    await this.service.stateTransaction(this.data, 'cstPeoplePortfolioVJQRDS', 'createNewPortfolioRecordAGVJ', 'triReviseReocrdVJ')
    this.router.navigate(['dashboard']);
  }

  //For hide and show save button 
  recordDataLoad(transactionData: any) {
    if (transactionData.transitionInfo.availableTrans) {
      const transitions = transactionData.transitionInfo.availableTrans;
      transitions.triActivate ? this.showActivateButton = true : this.showActivateButton = false
      transitions.triSave ? this.showSaveButton = true : this.showSaveButton = false
      transitions.triRetire ? this.showRetireButton = true : this.showRetireButton = false;
      transitions.triRevise ? this.showReviseButton = true : this.showReviseButton = false
    }
  }
}








