import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  constructor(public router: Router ,private cdr: ChangeDetectorRef) { }

  ngOnInit() { }

  userAuthInfo(data: string) {
    if (data === 'login') {
      this.login = true
      this.signup = false
    } else {
      this.signup = true
      this.login = false
    }

  } 
 
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  loginInfo() {
    this.isModalOpen = false;
    this.cdr.detectChanges(); 
   
    this.router.navigate(['home']);
    
  }

}
