
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../app/component/util/utils'
import { lastValueFrom } from 'rxjs';

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

  //For get data this methid expect 2 arguments 
  async getApiData(exposeDbName: string, cstVishwajitModelView: string) {
    const url = baseUrl + cstVishwajitModelView + this.modelInstancePath + exposeDbName + this.otherFilter
    const serverResponse: any = await this.http.get(url, { withCredentials: true }).toPromise();
    return await serverResponse?.data
  }

  //For add data
  async postData(data: any, cstVishwajitModelView: string, exposeDbName: string, actionGroup: string, action: string) {
    const NEW_RECORD_DATA = { data };
    const postUrl = ` ${baseUrl + cstVishwajitModelView + this.modelInstancePath + exposeDbName + `?actionGroup=${actionGroup}&action=${action}`} `
    await lastValueFrom(this.http.post(postUrl, NEW_RECORD_DATA, { withCredentials: true }));

  }

  //For update data
  async updateData(data: any, cstVishwajitModelView: string, exposeDbName: string,) {
    const NEW_RECORD_DATA = { data };
    let method = 'update'
    const postUrl = baseUrl + cstVishwajitModelView + this.modelInstancePath + exposeDbName + '?method=update'
    await lastValueFrom(this.http.put(postUrl, NEW_RECORD_DATA, { withCredentials: true }));

  }

}