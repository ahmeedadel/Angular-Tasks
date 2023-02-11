import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { PfirstService } from 'src/app/Service/pfirst.service'
@Component({
  selector: 'app-user-detils',
  templateUrl: './user-detils.component.html',

  styleUrls: ['./user-detils.component.css']
})

export class UserDetilsComponent {

  user:any;
   ID=0;
   constructor(myService:PfirstService,myActiviivated:ActivatedRoute){
    this.ID=myActiviivated.snapshot.params["id"];
    myService.GetUserByID(this.ID).subscribe(
      {
        next:(data)=>{
          this.user=data;
        },
        error:(err)=>{console.log(err)}

      }
    )
   }
}
