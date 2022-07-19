import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-add-employee-details',
  templateUrl: './add-employee-details.component.html',
  styleUrls: ['./add-employee-details.component.css']
})
export class AddEmployeeDetailsComponent implements OnInit {
  @Output() onAddTask:EventEmitter<Employee>=new EventEmitter();
   name:string="";
   email:string="";
   pnumber="number";
   profession:string="";
   reminder:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

}
