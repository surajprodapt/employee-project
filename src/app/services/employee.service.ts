import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Employee } from '../employee';
import { Observable } from 'rxjs';

const httpOptions={
  headers:new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private empUrl ="http://localhost:4201/employees"
  constructor(private http:HttpClient)  { }

  getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.empUrl);

  }

  

  deleteEmp(emp:Employee):Observable<Employee>{
    const demp=`${this.empUrl}/${emp.id}`;
    return this.http.delete<Employee>(demp)
  

  }

  }




