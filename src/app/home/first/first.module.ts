import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CompAComponent } from '../comp-a/comp-a.component';
import { CompBComponent } from '../comp-b/comp-b.component';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';

const rt : Routes = [
  {component:CompAComponent, path:'a'},
  {component:CompBComponent, path:'b'},
]

@NgModule({
  declarations: [
    CompAComponent,
    CompBComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    [RouterModule.forChild(rt)],
  ],
  exports: [TableModule]
})
export class FirstModule { }
