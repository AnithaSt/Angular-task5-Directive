import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {
 details:any;
  constructor() { }

  ngOnInit() {
    this.details=[
      {
        imgUrl:'https://static-cdn.jtvnw.net/jtv_user_pictures/89ab44ce-f2fa-4d5a-bd16-ca717d9fc125-profile_image-300x300.png',
        name: "Anitha",
        email:"anitha@gmail.com",
        address:"Tirunelveli",
        phone:"9600724125"
      },
      {
        imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9fU0h8X1CHRMSFgfYwDtHSe8nKggz5NdUcM8HFwFTZoqDme2c',
        name: "Manju",
        email:"manju@gmail.com",
        address:"Tirunelveli",
        phone:"9680072412"
      },
      {
        imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDyJSY23IX0Lbb4ELUn9V3Wp81EqGPWr8BdjidwMrCSpqMdtt3',
        name: "Sudha",
        email:"sudha@gmail.com",
        address:"Chennai",
        phone:"9678644532"
      },
      {
        imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjG3yURv-evWPcWu3xE07EgN9cvCkhZU4OeIgLZJjcp_4171fP',
        name: "Krishna",
        email:"krishna@gmail.com",
        address:"Chennai",
        phone:"9667897654"
      }
    ]
  }

}
