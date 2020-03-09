import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule, TooltipModule, ModalModule, TabsModule} from 'ngx-bootstrap';
import { BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { PlayersService } from './_services/players.service';
import { NavComponent } from './nav/nav.component';
import { DateTimeFormatPipePipe } from './_helpers/DateTimeFormatPipe.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { RouterModule, Routes } from '@angular/router';
import { TransactionsComponent } from './transactions/transactions.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [];
@NgModule({
   declarations: [
      AppComponent,
      DashboardComponent,
      NavComponent,
      DateTimeFormatPipePipe,
      UserComponent,
      LoginComponent,
      RegistrationComponent,
      PlayersComponent,
      TransactionsComponent,
      UploadComponent
      ],
   imports: [
      BrowserModule,
      BsDropdownModule.forRoot(),
      BsDatepickerModule.forRoot(),
      TooltipModule.forRoot(),
      ModalModule.forRoot(),
      BrowserAnimationsModule,
      ToastrModule.forRoot({
         timeOut: 3000,
         preventDuplicates: true,
         progressBar: true
      }),
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(routes, { useHash: true }),
   ],
   providers: [
      PlayersService,
      {
         provide: HTTP_INTERCEPTORS,
         useClass: AuthInterceptor,
         multi: true
      },
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
