import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { CartDetailComponent } from './store/cartDetail.component';
import { CheckoutComponent } from './store/checkout.component';

const routes: Routes = [
// {path:"store",component:StoreComponent},
// {path:"Cart",component:CartDetailComponent},
// {path:"Checkout",component:CheckoutComponent},
// { path: "**", redirectTo: "/store" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
