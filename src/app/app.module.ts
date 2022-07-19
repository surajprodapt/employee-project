import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AddEmployeeDetailsComponent } from './add-employee-details/add-employee-details.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    EmployeeComponent,
    EmployeeDetailsComponent,
    AddEmployeeDetailsComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
    
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
