import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { ContactListComponent } from './contacts/list/list.component';
//import { ContactViewComponent } from './contacts/view/view.component';
import { ListViewComponent } from './lists/list-view/list-view.component';
import { ListCreateComponent } from './lists/list-create/list-create.component';

const routes: Routes = [
  {
    path: '',
    component: ListViewComponent
  },
  //,
  //{
  //  path: 'contacts/:id',
   // component: ContactViewComponent
  //}
  {
    path: 'items',
    component: ListCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
