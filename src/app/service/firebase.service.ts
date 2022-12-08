import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { from } from 'rxjs';
import {  signInWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collectionData, deleteDoc, doc,Firestore, query, setDoc, updateDoc , where} from '@angular/fire/firestore';
import {  Employee, EmployeeBonus, EmployeeAbsent, EmployeeWithdrawal,  MachineList,  } from '../interfaces/interface';
import { collection } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private authentication: Auth,private fService:Firestore ) { }


   /////////////////////// Authentication ////////////////////////

   login(username : string, password: string){
    return from(signInWithEmailAndPassword(this.authentication,username,password));
  }
  
  // logout(){
  //   return from(this.authentication.signOut());
  // }

    /////////////////////// Employee Data ////////////////////////

  // new data Employeeadd

    // add new data code here
    addEmployeeData(data: Employee) {
      data.id = doc(collection(this.fService, 'id')).id
      return addDoc(collection(this.fService, 'EmployeeList' ), data)
    }
  
    // get all data from Employee
    getAllEmployeeListData() {
      let dataRef = collection(this.fService, 'EmployeeList')
      return collectionData(dataRef, { idField: 'id' })
    }
  
    // Delete all data from Employee
    deleteEmployeeData(data: Employee) {
      let docRef = doc(collection(this.fService, 'EmployeeList' ), data.id);
      return deleteDoc(docRef)
    }
  
    // Update Invoice from Employee
    updateEmployeeData(data: Employee, Employee: any) {
      let dataRef = doc(this.fService, `EmployeeList/${data}` );
      return updateDoc(dataRef, Employee)
    }  

}
