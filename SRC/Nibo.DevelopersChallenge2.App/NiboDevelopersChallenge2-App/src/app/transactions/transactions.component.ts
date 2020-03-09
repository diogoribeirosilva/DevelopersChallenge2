import { Component, Inject } from '@angular/core';
import { TransactionOfx } from '../_models/transactionOfx';
import { TransactionOfxService } from '../_services/transaction-ofx.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})

export class TransactionsComponent {
  [x: string]: any;
  public transactions: TransactionOfx[];

  constructor(  
      private transactionOfxService: TransactionOfxService
    , private toastr: ToastrService) {

    this.transactionOfxService.transaction().subscribe(
      ( _transactions: TransactionOfx[]) => {
        this.transactions = _transactions;
      }, error => {
        this.toastr.error(`Erro ao tentar carregar os jogadores: ${error}`);
      });
  }
}
