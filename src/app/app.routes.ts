import {RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { Create } from './task/create/create';
import { View } from './task/view/view';
import { UpdateComponent } from './task/update/update';
import { DeleteComponent } from './task/delete/delete';

export const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: 'tasks', component: View },
  { path: 'tasks/create', component: Create },
  { path: 'tasks/edit/:id', component: UpdateComponent },
  { path: 'tasks/delete/:id', component: DeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }