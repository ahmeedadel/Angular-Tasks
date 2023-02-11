import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PfirstService } from 'src/app/Service/pfirst.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users:any;


  
  constructor(myService:PfirstService){
    console.log(myService.GetAllUsers())
  

    myService.GetAllUsers().subscribe(
        {
          next:(data)=>{
           
            this.users = data;
          },
          error:(err)=>{console.log(err)}
        }
      )
      }
       

// user:any;
//    ID=0;
//    constructor(myService:PfirstService,myActiviivated:ActivatedRoute){
//     this.ID=myActiviivated.snapshot.params["id"];
//     myService.GetUserByID(this.ID).subscribe(
//       {
//         next:(data)=>{
//           this.user=data;
//         },
//         error:(err)=>{console.log(err)}
        
//       }
//     )
//    }
  
  
}
