import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  
 	      firstName = "";  
          lastName = "";
	
    constructor(fname, lname) {   
        this.firstName = fname;
        this.lastName = lname;
    }

    getFname() {  
        return "First name Is"+this.firstName;
    }

    getLname() {
        return "Last name Is"+this.lastName;  
    }
	
    asim = new AppComponent("Asim","Hussain");
	
	title=this.asim.getFname()+this.asim.getLname(); 
}
