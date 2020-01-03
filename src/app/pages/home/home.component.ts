import { Component} from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent {
    
    

    constructor(private router: Router) {
    }

    ngOnInit() {
       this.router.navigateByUrl('home/dashboard');
    }
    

    // logout(){
    //   localStorage.removeItem('currentUser');
    //   this.router.navigate(['']);
    // }

    
   
  

  }

