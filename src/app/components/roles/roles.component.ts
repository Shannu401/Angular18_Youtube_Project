import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIResponseModel, IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{
  // string, number, boolean, date, object, array, null, undefined

  // firstName: string = 'Angular Tutorial';
  // angularVersion = 'Angular 18';
  
  // version: number = 18;
  // isActive: boolean = false;
  // currentDate: Date = new Date();

  // inputType: string = 'button';

  // selectedState: string = 'AP';

  // showWelcomeAlert(){
  //   alert("Welcome to Angular 18 Tutorial");
  // }

  // showMessage(message: string){
  //   alert(message);
  // }


  //Day 2

  // ngOnInit(){
  //   alert('Hi');
  // }

  //constructor(private httpClient: HttpClient){}

  roleList: IRole[] = [];
  httpClient = inject(HttpClient);

  selectedRoleId = '7';
  ngOnInit(): void {
    this.getAllRoles(); 
  }

  // With httpClient
  // getAllRoles(){
  //   this.httpClient.get('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles').subscribe( (res: any)=> {
  //     this.roleList = res.data;
  //   })
  // }

  getAllRoles(){
    this.httpClient.get('http://localhost:3000/data').subscribe((res:any) => {
      this.roleList = res;
    })
  }
}
