export interface Employee {
    id: string,
    firstname: string,
    lastname: string,
    salary: number,
    phonenumber: number,
}

export interface EmployeeBonus {
    id: string,
    firstName: string,
    employeeId: string,
    accountYear:string
    bonusAmount: number,
    bonusDate: string,
}

export interface EmployeeAbsent {
    id: string,
    firstName: string,
    accountYear:string
    dayCount: number,
    employeeId: string,
    absentDate: string
}

export interface EmployeeWithdrawal {
    id: string,
    firstName: string,
    accountYear:string
    employeeId: string,
    withdrawalAmount: number,
    withdrawalDate: string
}

export interface MachineList {
    id: string,
    firstName: string,
    accountYear:string
    employeeId: string,
    machineAmount: number,
    machineDate: string,
}