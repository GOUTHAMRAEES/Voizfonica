import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'voizFonica';
  constructor(private router:Router){}
  menucheck()
  {
    if(this.router.url=='/my-account')
    return false;
    
    if(this.router.url=='/')
    return true;
    
    
  }
}

