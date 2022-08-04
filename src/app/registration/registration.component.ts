import { Component,ElementRef, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { CustomValidators } from '../services/customvalidators.service';

@Component({
  selector: 'app-register',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  title:string = "Registration Form";
  registrationForm!: FormGroup; 
  constructor(){
    
  }
  ngOnInit() {
    this.registrationForm = new FormGroup({
      firstname: new FormControl('',[Validators.required,Validators.minLength(2)]),
      lastname: new FormControl('',[Validators.required,Validators.minLength(2)]),
      email: new FormControl('',[Validators.email,Validators.required]),
      password: new FormControl('',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
      confirmPassword: new FormControl('',[Validators.required])
    },CustomValidators.MatchValidator('password','confirmPassword'));
  }
  onSubmit(){
    console.log(this.registrationForm);
  }
  get controls() {
    return this.registrationForm.controls;
  } 

}


