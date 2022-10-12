import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from 'src/app/pages/user-page/user-page.component';
import { UsersPageComponent } from 'src/app/pages/users-page/users-page.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersPageComponent,
    title: 'Users',
  },
  { path: 'user/:id', component: UserPageComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
