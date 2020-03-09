import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransactionOfx } from '../_models/transactionOfx';

@Injectable({
  providedIn: 'root'
})
export class TransactionOfxService {
  baseURL = 'https://localhost:44391/api/players';
  tokenHeader: HttpHeaders;
  
  constructor(private http: HttpClient) { }

  transaction(): Observable<TransactionOfx[]> {
    return this.http.get<TransactionOfx[]>(this.baseURL);
  }
}
