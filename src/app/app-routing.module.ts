import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Parent1Component } from './parent1/parent1.component';
import { Parent1child1Component } from './parent1child1/parent1child1.component';
import { Parent1child2Component } from './parent1child2/parent1child2.component';
import { Parent2Component } from './parent2/parent2.component';
import { Parent3Component } from './parent3/parent3.component';

const routes: Routes = [
  {
    path: 'parent1',
    component: Parent1Component,
    children: [
      {
        path: 'child1',
        component: Parent1child1Component
      },
      {
        path: 'child2',
        component: Parent1child2Component
      }
    ]
  },
  {
    path: 'parent2',
    component: Parent2Component
  },
  {
    path: 'parent3/:id',
    component: Parent3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
