import { Component } from '@angular/core';
import { InputComponent } from '../component/input/input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ 
    InputComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-1802-app';
  userName: string = "";
  onUserNameChange(value: string) {
    this.userName = value;
  }

}
