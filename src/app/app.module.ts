import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { UserComponent } from './user/user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { FindOneUserComponent } from './find-one-user/find-one-user.component';
import { FindAllUserComponent } from './find-all-user/find-all-user.component';
import { CreateuserComponent } from './createuser/createuser.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UserComponent,
    DeleteUserComponent,
    UpdateUserComponent,
    FindOneUserComponent,
    FindAllUserComponent,
    CreateuserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
