import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesListComponent } from './courses-list/courses-list.component';

const routes: Routes = [
  {
		path: '',
		redirectTo: '/home/courses',
		pathMatch: 'full'
  },
  {
		path: 'home/courses',
		component: CoursesListComponent
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
