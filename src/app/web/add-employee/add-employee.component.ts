import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Employee } from 'src/app/interfaces/interface';
import { AuthService } from 'src/app/service/auth.service';
import { FirebaseService } from 'src/app/service/firebase.service';
import { msgType } from 'src/assets/Constant/message-constant';
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
  userId: any;
  isLoader:boolean = false
  constructor(private fb: FormBuilder,
              private firebaseService:FirebaseService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private translate: TranslateService,
              private router:Router,
              private authService:AuthService
    ) { }

  ngOnInit(): void {
    this.height = window.innerHeight - 279 + 'px'  
    this.employeeFormBuilder();
    this.getAllDataInNgOnInit();
    if(sessionStorage.getItem('isAuthenticate') === null) {
      this.router.navigate(['/login'])
    }
    
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
    const payload: Employee = {
      id: '',
      firstname: this.employeeForm.value.firstname,
      lastname: this.employeeForm.value.lastname,
      salary: this.employeeForm.value.salary,
      phonenumber: this.employeeForm.value.phonenumber,
    }

    if (this.userId != undefined) {

      this.firebaseService.updateEmployeeData(this.userId, payload).then(() => {
        this.messageService.add({
          severity: msgType.success,
          summary: this.translate.instant('MSGTITLE.SUCCESS'),
          detail: this.translate.instant('COMMON_MESSAGE.UpdateData'),
          life: 1500
        })
        this.employeeForm.reset()
      })
    } else {
      this.firebaseService.addEmployeeData(payload).then((res) => {
        if (res) {
          this.messageService.add({
            severity: msgType.success,
            summary: this.translate.instant('MSGTITLE.SUCCESS'),
            detail:  this.translate.instant('COMMON_MESSAGE.SubmitData'),
            life: 1500
          })
          this.employeeForm.reset()
        }
      })
    }
  }

  deleteEmployeeData(data: any): void {
    this.confirmationService.confirm({
      message: this.translate.instant('COMMON_MESSAGE.DeleteAlertL'),
      header: this.translate.instant('COMMON_MESSAGE.DeleteHeader'),
      accept: async () => {
        await this.firebaseService.deleteEmployeeData(data)
        this.messageService.add({
          severity: msgType.success,
          summary: this.translate.instant('MSGTITLE.SUCCESS'),
          detail:  this.translate.instant('COMMON_MESSAGE.DeletedData'),
          life: 2000
        });
      }
    })
  }

  editEmployeeData(data: any): void {
    this.userId = data.id
    this.isEdit = true;
    this.employeeForm.controls['firstname'].setValue(data.firstname)
    this.employeeForm.controls['lastname'].setValue(data.lastname)
    this.employeeForm.controls['salary'].setValue(data.salary)
    this.employeeForm.controls['phonenumber'].setValue(data.phonenumber)
  }


  getAllDataInNgOnInit(){
    this.isLoader = true;
      this.firebaseService.getAllEmployeeListData().subscribe((res) => {
        this.employeeList = res
        this.isLoader = false;
  })
}

 logOut(): void{
    localStorage.clear();
    this.authService.signOut()

    // this.firebaseService.logout().subscribe(()=>{
    //   this.router.navigate(['/login'])
    // })
  }

}
