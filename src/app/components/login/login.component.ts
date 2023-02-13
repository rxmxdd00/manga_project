import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor (public authService : AuthService) {}

  onSignUp(email : string, password: string){
    // this.authService.SignUp(email,password);
  }
}

