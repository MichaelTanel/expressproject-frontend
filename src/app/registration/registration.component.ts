import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  email: string;
  pass: string;
  confirmPass: string;

  constructor(private registrationService: RegistrationService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('hello in register');
    this.registrationService.register(this.email, this.pass, this.confirmPass).subscribe(result => {
      console.log('result', result);
    }, (err) => {
      console.log('error', err);
    });
  }
}
