import { Component, OnInit } from '@angular/core';

// ************************* SERVICES ***********************************
import { UserService } from './services/user.service';
// ************************* SERVICES ***********************************

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  data = '';

  constructor(private studentService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){


    //Consuming service
    this.studentService.getUsers().subscribe(
      data => {
        console.log(data)
        this.data = JSON.stringify(data);;
      }, 
      
      error => {   
        console.log(error)
      });
    //Consuming service
  }

}
