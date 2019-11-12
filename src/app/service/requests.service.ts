import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  token = '';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json', Authorization: 'Bearer ' + this.token})
  };

  constructor(private httpClient: HttpClient) {
  }

  getBrands(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'brands', this.httpOptions);
  }

  getModels(brandId): Observable<any> {
    const params = '?brand_id=' + brandId;
    return this.httpClient.get(environment.apiUrl + 'models' + params, this.httpOptions);
  }

  getFilter(main: number): Observable<any> {
    const param = '?main=' + main;
    return this.httpClient.get(environment.apiUrl + 'filter' + param, this.httpOptions);
  }

  search(body): Observable<any> {
    return this.httpClient.post(environment.apiUrl + 'search', body, this.httpOptions);
  }

  applyFilter(val, brand): Observable<any> {
    const body = {
      vals: val,
      brand: brand
    };
    return this.httpClient.post(environment.apiUrl + 'filter', body, this.httpOptions);
  }
}
