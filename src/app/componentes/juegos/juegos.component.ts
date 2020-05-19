import { Component, OnInit } from '@angular/core';
import { AuthFirebaseService } from '../../servicios/auth-firebase.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  constructor(public authService: AuthFirebaseService, public router: Router) { }

  ngOnInit() {
  }
  desloguarse() {
    this.router.navigate(['/inicio']);
    this.authService.desloguearse().then(res => {
       console.log(res);
       
    }).catch(err => console.log(err));
  }
}
