import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { FindOneUserComponent } from './find-one-user/find-one-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { FindAllUserComponent } from './find-all-user/find-all-user.component';
import { MainComponent } from './main/main.component';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { CreateuserComponent } from './createuser/createuser.component';

const routes: Routes = [
        {path: 'user', component: UserComponent},
        {path: '', component: MainComponent},
        { path: 'createuser', component: CreateuserComponent},
        { path: 'deleteUser', component: DeleteUserComponent},
        { path: 'findById', component: FindOneUserComponent},
        { path: 'UpdateUser', component: UpdateUserComponent},
        { path: 'findAllUser', component:FindAllUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
