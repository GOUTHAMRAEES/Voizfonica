import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ButtonAngularJsComponent } from './button-angular-js/button-angular-js.component';
import { HomepageContentComponent } from './homepage-content/homepage-content.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { FooterComponent } from './footer/footer.component';
import { PrepaidInstantComponent } from './prepaid-instant/prepaid-instant.component';
import { PrepaidPacksComponent } from './prepaid-packs/prepaid-packs.component';
import { CustomersupComponent } from './customersup/customersup.component';
import { BusinessComponent } from './business/business.component';
import { PostpaidComponent } from './postpaid/postpaid.component';
import { ConnectionComponent } from './connection/connection.component';
import { DongleComponent } from './dongle/dongle.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule
 } from '@angular/material';
import { InvoiceComponent } from './invoice/invoice.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ButtonAngularJsComponent,
    HomepageContentComponent,
    MyAccountComponent,
    FooterComponent,
    PrepaidInstantComponent,
    PrepaidPacksComponent,
    CustomersupComponent,
    BusinessComponent,
    PostpaidComponent,
    ConnectionComponent,
    DongleComponent,
    FormsComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



