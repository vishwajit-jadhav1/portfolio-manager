import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

interface loginUser {
  name: string,
  _id: number
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  data: loginUser[] = []

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.getData("cstCurrentLoginUserVJDS", "cstPeoplePortfolioModelVIew")
  }

  async getData(dataSource: string, modelView: string) {
    this.data = await this.service.getApiData(dataSource, modelView)
  }
}
