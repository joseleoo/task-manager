import {RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { Create } from './task/create/create';
import { View } from './task/view/view';

export const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: 'tasks', component: View },
  { path: 'tasks/create', component: Create },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }