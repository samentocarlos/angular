import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  constructor() { }

  ngOnInit() {
    this.name = 'Sam Norman';
    this.age = 33;  
    this.email = 'samatbek@gmail.com';
    this.address = {
      street: 'Tunguch',
      city: 'Bishkek',
      state: 'Chuy Oblast'
    }
    this.hobbies = ['Football'];
  }
 onClick(){
this.name = "Mirvel";
this.hobbies.push('Reading')

}
addHobby(hobby){
  this.hobbies.unshift(hobby);
  return false;
}
interface Address{
  street:string,
  city:string,
  state:string
}