
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../app/component/util/utils'
import { lastValueFrom } from 'rxjs';
import { userData } from './app.types';

// interface any {
//   //[]
// }

@Injectable({
  providedIn: 'root'
})

export class AppService {
  serverResponse: any
  constructor(private http: HttpClient) { }

  otherFilter = '?countOnly=false&query=true'
  modelInstancePath = "/-1/";
  modelViewName = 'cstPeoplePortfolioModelVIew'

  //For get data this methid expect 2 arguments 
  async getApiData(exposeDbName: string, specId?: number,) {
    let url
    if (specId) {
      url = baseUrl + this.modelViewName + this.modelInstancePath + exposeDbName + "/" + specId + this.otherFilter

    }
    else {
      url = baseUrl + this.modelViewName + this.modelInstancePath + exposeDbName + this.otherFilter

    }
    const serverResponse: any = await this.http.get(url, { withCredentials: true }).toPromise();
    return await serverResponse
  }

  async getApiData1(id: string | undefined | number, exposeDbParent: string, exposeDbChild: string): Promise<object> {
    const url = baseUrl + this.modelViewName + this.modelInstancePath + exposeDbParent + "/" + id + "/" + exposeDbChild + this.otherFilter
    const serverResponse: any = await this.http.get(url, { withCredentials: true }).toPromise();
    return serverResponse?.data
  }

  //For add data
  async postData(data: userData, exposeDbName: string, actionGroup: string, action: string, exposeDbChild?: string, id?: any) {
    const NEW_RECORD_DATA = { data };
    let postUrl = ""
    if (exposeDbChild) {
      postUrl = ` ${baseUrl + this.modelViewName + this.modelInstancePath + exposeDbName + "/" + id + "/" + exposeDbChild + `?actionGroup=${actionGroup}&action=${action}` + "&refresh= true"} `

    }
    else {
      postUrl = ` ${baseUrl + this.modelViewName + this.modelInstancePath + exposeDbName + `?actionGroup=${actionGroup}&action=${action}` + "&refresh=true"} `

    }
    return await lastValueFrom(this.http.post(postUrl, NEW_RECORD_DATA, { withCredentials: true }));
  }

  //For update data
  async updateData(data: userData, exposeDbName: string,) {
    const NEW_RECORD_DATA = { data };
    const postUrl = baseUrl + this.modelViewName + this.modelInstancePath + exposeDbName + '?method=update' + "&refresh= true"
    await lastValueFrom(this.http.put(postUrl, NEW_RECORD_DATA, { withCredentials: true }));

  }


  async stateTransaction(data: userData, exposeDbName: string, actionGroup: string, action: string) {
    const NEW_RECORD_DATA = { data };
    const postUrl = ` ${baseUrl + this.modelViewName + this.modelInstancePath + exposeDbName + `?actionGroup=${actionGroup}&action=${action}`} `
    const serverResponse = await this.http.put(postUrl, NEW_RECORD_DATA, { withCredentials: true }).toPromise()
  }


}



