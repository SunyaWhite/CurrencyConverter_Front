import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConverterComponent } from "../CurrencyConverter/Components/Converter.component";


const routes: Routes = 
[
  {
    path : "Converter",
    component : ConverterComponent
  },
  {
    path : "",
    component : ConverterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
