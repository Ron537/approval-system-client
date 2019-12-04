import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  currentUser$: Observable<{ name: string, unit: string }>;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.currentUser$ = this.userService.currentUser();
  }
}
