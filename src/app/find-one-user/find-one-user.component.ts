import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-find-one-user',
  templateUrl: './find-one-user.component.html',
  styleUrls: ['./find-one-user.component.scss']
})
export class FindOneUserComponent {

    User: any;
    form = new FormGroup({
        id: new FormControl(''),
      });
  
    constructor(private userService: UsersService) { }
  
    ngOnInit() {
    }
  
    onSubmit(): void {
      this.userService.getUserById(this.form.get("id")?.value).subscribe((res) => {
        this.User = res;
        console.log(this.User);
      });
    }

}
