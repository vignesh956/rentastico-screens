import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login: boolean = true;
  signup: boolean = false;
  isModalOpen = false;
  constructor(public router: Router ,) { }

  ngOnInit() { }

  userAuthInfo(data: any) {
    if (data === 'login') {
      this.login = true
      this.signup = false
    } else {
      this.signup = true
      this.login = false
    }

  }
 
  setOpen(isOpen: any) {
    this.isModalOpen = isOpen;
  }
  loginInfo() {
    this.isModalOpen = false;
    this.router.navigate(['/home'])
  }

}
