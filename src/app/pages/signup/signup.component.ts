import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  user = {
    name: '',
    email: '',
    ph: null,
    password:'',
    confirm_pwd:''
  };

  isConfirmInvalid():boolean{
    if(this.user.password===this.user.confirm_pwd){
      return false;
    }else{
      return true;
    }

  }
  
}
