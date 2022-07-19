import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title="Employee Datatbase";

  showAddEmployee:boolean=false;
  subscription?:Subscription;


  constructor(
    private uiService: UiService){
     
    this.subscription = this.uiService
                          .ontoggle()
                          .subscribe(
                            (value) => (this.showAddEmployee = value)
                          )
  }
  toggleEmployee(){
    
    this.uiService.toggleAddEmployee();
  }

  ngOnInit(): void {
  }
 

}
