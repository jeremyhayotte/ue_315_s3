import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.scss']
})
export class CreateuserComponent implements OnInit {
    
    Success: boolean =  false;
    form!: FormGroup<{ firstname: FormControl<string | null>; lastname: FormControl<string | null>; }>;
    constructor(
        private userService: UsersService
    ) { }
    ngOnInit() {
        this.form = new FormGroup({
            firstname: new FormControl(''),
            lastname: new FormControl(''),
          });
    }
   async onSubmit() {
       // console.log(this.form.value);
      await this.userService.addUser(this.form.value).subscribe(
            (res) => {
                this.Success = true;
            }
        )
    }
    
}
