import { Component, } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { ActivatedRoute, Router } from '@angular/router';
interface loginUser {
  name: string,
  _id: number
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  peopleId = false
  LoginUserName = ''
  id = ''
  constructor(private service: AppService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

    //Get id from params
    router.events.subscribe((val: any) => {
      if (val.url) {
        if (val.url.includes('user')) {
          this.peopleId = true
          let url = val.url.split("/")
          this.id = url[url.length - 1];
        }
        else {
          this.peopleId = false
        }
      }

    });
  }

  ngOnInit(): void {
    this.getData("cstCurrentLoginUserVJDS")
  }


  async getData(dataSource: string) {
    const data = await this.service.getApiData(dataSource)
    this.LoginUserName = data.data[0]?.name
  }
}
