import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Employee } from '../employee';
import { EMPLOYEES } from '../employee-data';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  faTimes= faTimes;
  @Input() emp?:Employee;

  @Output() onDeleteEmp:EventEmitter<Employee>=new EventEmitter();
  @Output() onToggleProjectEmp:EventEmitter<Employee>=new EventEmitter();


  constructor() { }
  onDelete(emp:Employee){
    this.onDeleteEmp.emit(emp)
  }
  onToggle(emp:Employee){
    this.onToggleProjectEmp.emit(emp);
  }

  ngOnInit(): void {
  }


}
