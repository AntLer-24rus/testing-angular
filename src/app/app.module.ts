import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from 'src/app/classes/auth.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserListItemComponent } from './components/user-list-item/user-list-item.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ResourcesPageComponent } from './pages/resources-page/resources-page.component';
import { ResourceComponent } from './components/resource/resource.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { ModalComponent } from './components/modal/modal.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersPageComponent,
    UserCardComponent,
    UsersListComponent,
    UserListItemComponent,
    UserPageComponent,
    NavigationComponent,
    ResourcesPageComponent,
    ResourceComponent,
    UserEditComponent,
    ModalComponent,
    LoginPageComponent,
    RegistrationPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
