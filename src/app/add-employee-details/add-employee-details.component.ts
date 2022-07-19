import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from '../employee';
import { Subscription, Subject } from 'rxjs';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'app-add-employee-details',
  templateUrl: './add-employee-details.component.html',
  styleUrls: ['./add-employee-details.component.css']
})
export class AddEmployeeDetailsComponent implements OnInit {
  @Output() onAddEmployee: EventEmitter<Employee> = new EventEmitter;
  name: string = '';
  email: string = '';
  pnumber: number = 91;
  profession: string = '';
  project: boolean = false;
  showAddEmployee?: boolean;
  subscription?: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .ontoggle()
      .subscribe(
        (value) => (this.showAddEmployee = value))
  }

  ngOnInit(): void { }
  onSubmit() {
    if (!this.name) {
      alert('please mention the employee name');
      return;
    }
    const newEmployee = {
      name: this.name,
      email: this.email,
      pnumber: this.pnumber,
      profession: this.profession,
      project: this.project
    }

    this.onAddEmployee.emit(newEmployee)
    this.name = '';
    this.email = '';
    this.pnumber;
    this.profession;
    this.project = false;

  }
}


