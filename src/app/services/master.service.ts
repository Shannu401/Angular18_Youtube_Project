import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseModel } from '../model/interface/role';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private httpClient: HttpClient) { }


  getAllDesignations(): Observable<APIResponseModel>{
    return this.httpClient.get<APIResponseModel>('http://localhost:3001/data1');
  }
}
