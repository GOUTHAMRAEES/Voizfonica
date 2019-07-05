import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrepaidInstantComponent } from './prepaid-instant/prepaid-instant.component';
import { MyAccountComponent } from './my-account/my-account.component';
import {CommonModule} from '@angular/common';
import { BusinessComponent } from './business/business.component';
import { CustomersupComponent } from './customersup/customersup.component';
import { HomepageContentComponent } from './homepage-content/homepage-content.component';
import { PrepaidPacksComponent } from './prepaid-packs/prepaid-packs.component';
import { ConnectionComponent } from './connection/connection.component';
import { PostpaidComponent } from './postpaid/postpaid.component';
import { DongleComponent } from './dongle/dongle.component';
import { FormsComponent } from './forms/forms.component';
import { InvoiceComponent } from './invoice/invoice.component';




const routes: Routes = [{path:'my-account', component: MyAccountComponent},
{path:'business',component:BusinessComponent},
{path:'customersup',component:CustomersupComponent},
{path:'forms',component:FormsComponent},
{path:'homepage-content',component:HomepageContentComponent},
{path:'prepaid-instant',component:PrepaidInstantComponent},
{path:'prepaid-packs',component:PrepaidPacksComponent},
{path:'connection', component:ConnectionComponent},
{path:'postpaid',component:PostpaidComponent},
{path:'dongle',component:DongleComponent},
{path:'invoice',component:InvoiceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
