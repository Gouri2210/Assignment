import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';


const rout: Routes = [
  {component:HomeComponent, path:""},
  {path:'first', loadChildren:()=>import('./home/first/first.module').then(x => x.FirstModule)}

  
  // {component:CompAComponent, redirectTo:'b'}
]




@NgModule({
  imports: [RouterModule.forRoot(rout)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
