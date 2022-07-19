import { Component, OnInit } from '@angular/core';
import { EmployeeService} from '../services/employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees:Employee[]= [];

  constructor(private employeesServices:EmployeeService) { }

  ngOnInit(): void {
    this.employeesServices.getEmployees().subscribe((employees)=>(this.employees=employees))
  }
  deleteEmp(emp:Employee){
    this.employeesServices
    .deleteEmp(emp)
    .subscribe(()=>(
      this.employees=this.employees.filter(t=>t.id !==emp.id)
    ));
  }
 

  }


