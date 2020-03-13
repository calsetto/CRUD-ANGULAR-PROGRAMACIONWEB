import { Component } from '@angular/core';
import { Employee } from './models/employee';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {

    employeeArray: Employee[] = [

    {id: 1, name: "Eduardo", lastname: "Mendez", matricula: "402-303654-8"}

  ];

  selectedEmployee: Employee = new Employee();

  addOrEdit(){
    //añade un nuevo empleado
    if(this.selectedEmployee.id == 0){

      this.selectedEmployee.id = this.employeeArray.length + 1;
      this.employeeArray.push(this.selectedEmployee)

    }
    
    this.selectedEmployee = new Employee();

  }

  openEdit(empleado: Employee){

    this.selectedEmployee = empleado;

  }

  Delete(){

    if(confirm('Estas seguro de eliminarlo?')){

      this.employeeArray = this.employeeArray.filter(x => x != this.selectedEmployee);
      this.selectedEmployee = new Employee();

    }

  }

}
