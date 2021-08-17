import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import * as fromState from './reducers/customer.reducers';

import { AppComponent } from './app.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';

@NgModule({
  declarations: [AppComponent, CustomerComponent, CustomerListComponent, AddCustomerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(fromState.customerFeatureKey, fromState.reducer),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
