import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent {

    form = new FormGroup({
        id: new FormControl(''),
        firstname: new FormControl(''),
        lastname: new FormControl(''),
      });
    success: boolean = false;
    constructor(
        private userService: UsersService
    ) { }
    ngOnInit() {
        
    }

    Update() {
        this.userService.update(this.form.get("id")?.value,this.form.value).subscribe(
            (es) => {
                this.success = true;
            }
        )
    }
}
