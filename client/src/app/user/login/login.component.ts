import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';
import { FormsModule, NgForm } from '@angular/forms';
import { EmailDirective } from '../../directives/email.directive';
import { DOMAINS } from '../../constants';
import { ErrorMsgComponent } from "../../core/error-msg/error-msg.component";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, EmailDirective,ErrorMsgComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})



// export class LoginComponent {
//   domains = DOMAINS;

//   constructor(private userService: UserService, private router: Router) {}

  
//   login(form: NgForm) {
//     if (form.invalid) {
//       console.error('Invalid Login Form!');
//       return;
//     }

//     const { email, password } = form.value;

//     this.userService.login(email, password).subscribe(() => {
//       this.router.navigate(['/home']);
//     });
//   }

export class LoginComponent {

  domains = DOMAINS;

  constructor(private userService: UserService, private router: Router) {}

  errorMsg: string | undefined = '';

  login(form: NgForm) {

    const { email, password } = form.value;
    
    this.userService.login(email, password).subscribe({
      next: (user) => {
        this.errorMsg = ''
        this.router.navigate(['/home']);
      },
      error:(err) => {
        console.log(err)
        this.errorMsg = err.error?.message
      }
    })
  }

 }


