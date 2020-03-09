  
import { Component, ViewChild } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';
import { TransactionOfx } from '../_models/transactionOfx';
import { format } from 'util';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  public progress: number;
  public importedFiles: string[] = [];
  public transactions: TransactionOfx[];
  public newTransactions: TransactionOfx[];

  private formData: FormData;
  @ViewChild('form')
  private form;

  constructor(private http: HttpClient){}

  upload(files)
  {
      this.formData = new FormData();

      for (let file of files)
          this.formData.append(file.name, file);
      
      const uploadRequest = new HttpRequest('POST', 'api/upload', this.formData, {reportProgress: true});

      this.http.request(uploadRequest).subscribe(event => {
        switch(event.type){
            case HttpEventType.UploadProgress:
                this.progress = Math.round(100 * event.loaded/event.total);
                break;
            case HttpEventType.Response:
                this.transactions = event.body as TransactionOfx[];
                this.importedFiles = [];
                for (let file of files)
                    this.importedFiles.push(file.name);
                this.checkNewTransactions(this.transactions);
                break;
        }
      });
  }

  checkNewTransactions(transactions)
  {
    const uploadRequest = new HttpRequest('POST', 'api/Transaction/CheckNewTransactions', this.transactions);

      this.http.request(uploadRequest).subscribe(event => {
        switch(event.type){
            case HttpEventType.Response:
                this.newTransactions = event.body as TransactionOfx[];
                break;
        }
      });
  }

  save()
  {
    const uploadRequest = new HttpRequest('POST', 'api/Transaction/', this.newTransactions);

      this.http.request(uploadRequest).subscribe(event => {
        switch(event.type){
            case HttpEventType.Response:
                if (event.ok)
                  alert('Dados salvos');
                else
                  alert('Ocorreu um erro ao salvar as transações');
                break;
        }
      });
  }

  cancel()
  {
    this.formData = new FormData();
    this.importedFiles = [];
    this.transactions = null;
    this.form.nativeElement.reset();
  }
}
