import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  isEdit = false;
  employeeForm: any = FormGroup;
  employeeList: any;
  height:any
  constructor(private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.height = window.innerHeight - 278 + 'px'  
    this.employeeFormBuilder();
  }

  employeeFormBuilder(): void {
    this.employeeForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', ],
      salary: ['', Validators.required],
      phonenumber: ['',],

    })
  }
  employeeAdd(): void {
    this.employeeForm.reset()
    this.isEdit = false;
  }

  submit(): void {
    
  }

}
