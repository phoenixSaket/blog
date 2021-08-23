import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() name: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  clear() {
    localStorage.removeItem('id');
    this.router.navigate(['/']);
  }

}
