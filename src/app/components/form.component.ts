import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Registration } from '../models';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // onNewRegister = new Subject<Registration>()

  regForm!: FormGroup
  
  constructor(private fb: FormBuilder, private contactSvc: ContactService) { }

  ngOnInit(): void {
    this.regForm = this.createForm()
  }

  private createForm(): FormGroup {
    return this.fb.group({
      name: this.fb.control<string>('',[Validators.required, Validators.minLength(3)]),
      email: this.fb.control<string>('',[Validators.required, Validators.email]),
      tel: this.fb.control<string>('', [Validators.required])
    })
  }

  processForm() {
    const register = this.regForm.value as Registration
    console.info("ProcessForm() register:: ",register)
    this.contactSvc.newRegistration(register)
      .then(result => {
        console.info("result:: ",result)
        alert("Your registration code is:: "+result.message)
      })
      .catch(error => {
        console.error("error:: ",error)
      })
  }
    
  }


