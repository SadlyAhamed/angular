import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { ProductRepository } from './model/product.repository';
import { StaticDataSource } from './model/static.datasource';
import { StoreModule } from './store/store.module';
import { RouterModule } from "@angular/router";
import { StoreFirstGuard } from './storeFirst.guard';
import { CartDetailComponent } from './store/cartDetail.component';
import { CheckoutComponent } from './store/checkout.component';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule,
    
    RouterModule.forRoot([
      {
      path: "store", component: StoreComponent,
      canActivate: [StoreFirstGuard]
      },
      {
      path: "cart", component: CartDetailComponent,
      canActivate: [StoreFirstGuard]
      },
      {
      path: "checkout", component: CheckoutComponent,
      canActivate: [StoreFirstGuard]
      },
      {
        path: "admin",
        loadChildren: () => import("./admin/admin.module")
        .then(m => m.AdminModule),
        canActivate: [StoreFirstGuard]
        },
      { path: "**", redirectTo: "/store" }
      ])
  ],
  
  providers: [
    provideClientHydration(),
    ProductRepository,
    StaticDataSource,
    StoreFirstGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppComponent } from './app.component';
// import { StoreModule } from "./store/store.module";
// import { StoreComponent } from "./store/store.component";
// import { CheckoutComponent } from "./store/checkout.component";
// import { CartDetailComponent } from "./store/cartDetail.component";
// import { RouterModule } from "@angular/router";
// @NgModule({
//   declarations: [AppComponent],
//   imports: [BrowserModule, StoreModule,
//     RouterModule.forRoot([
//       { path: "store", component: StoreComponent },
//       { path: "cart", component: CartDetailComponent },
//       { path: "checkout", component: CheckoutComponent },
//       { path: "**", redirectTo: "/store" }
//     ])],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
