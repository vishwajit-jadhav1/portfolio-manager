import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { userData } from 'src/app/app.types';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  id = ""
  data: any
  constructor(private router: Router,
    private service: AppService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getData(id)
  }

  async getData(id: any) {
    let response: any = await this.service.getApiData1(id, "cstPeoplePortfolioAssociatedVJQRDS", "cstPeoplePortfolioAssociatedChildVJQRDS")
    this.data = response[0]
  }

}
