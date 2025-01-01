import { Component, inject, OnInit } from '@angular/core';
import { APIResponseModel, IDesignation } from '../../model/interface/role';
import { MasterService } from '../../services/master.service';
import { CommonModule, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [CommonModule,TitleCasePipe],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {

  designationList: IDesignation[] =[];
  masterService = inject(MasterService);
  isLoader: boolean = true;

  ngOnInit(): void {
    this.masterService.getAllDesignations().subscribe((res:APIResponseModel)=> {
      this.designationList = res.data;
      this.isLoader = false;
    }, error => {
      alert(error + 'error from master service designation components');
      this.isLoader = false;
    })
  }
}
