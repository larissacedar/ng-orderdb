import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPageComponent } from './pages/add-page/add-page.component';
import { AllOrdersPageComponent } from './pages/all-orders-page/all-orders-page.component';

const routes: Routes = [
  {path: "", component: AllOrdersPageComponent},
  {path: "add", component: AddPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
