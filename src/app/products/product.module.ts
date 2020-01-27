import {NgModule} from '@angular/core';
import {ProductComponent} from './product-list.component';
import {ProductDetailsComponent} from './product-details.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: 'products', component: ProductComponent},
      {path: 'products/:id', component: ProductDetailsComponent}
    ])
  ]
})
export class ProductModule {
}
