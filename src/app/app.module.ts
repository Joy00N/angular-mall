import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {WelcomeComponent} from './home/welcome.component';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {ProductData} from './products/product-data';
import {PageNotFoundComponent} from './page-not-found.component';
import {ProductModule} from './products/product.module';
import {UserModule} from './user/user.module';
import {MessageModule} from './messages/message.module';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(ProductData, {delay: 1000}),
    ProductModule,
    UserModule,
    MessageModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
