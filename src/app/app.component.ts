import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor( private router: Router) {}

  title = 'demo-app';

 
  navHome(){
    this.router.navigate(['/home'])
  };
  
}
