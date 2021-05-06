import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  item:string;
  data:string[]=[];
  isShown:boolean=false;
  btnName:string;
  addItem(){
    this.data.push(this.item)
    this.item="";
  }
  toggleShow(){
    this.isShown=!this.isShown;
  }  
}
