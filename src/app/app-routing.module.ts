import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/classes/auth.guard';
import { LoginPageComponent } from 'src/app/pages/login-page/login-page.component';
import { RegistrationPageComponent } from 'src/app/pages/registration-page/registration-page.component';
import { ResourcesPageComponent } from 'src/app/pages/resources-page/resources-page.component';
import { UserPageComponent } from 'src/app/pages/user-page/user-page.component';
import { UsersPageComponent } from 'src/app/pages/users-page/users-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent, title: 'Reqres | Login' },
  {
    path: 'registration',
    component: RegistrationPageComponent,
    title: 'Reqres | Registration',
  },
  {
    path: 'users',
    component: UsersPageComponent,
    title: 'Reqres | Users',
    canActivate: [AuthGuard],
  },
  { path: 'user/:id', component: UserPageComponent, canActivate: [AuthGuard] },
  {
    path: 'resources',
    component: ResourcesPageComponent,
    title: 'Reqres | Resources',
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
