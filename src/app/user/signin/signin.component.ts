import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Session } from 'src/app/model/session';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css', '../../../assets/css/dashforge.auth.css']
})
export class SigninComponent {

  session: Session;
  @Output() evnt = new EventEmitter<Session>();

  login() {
    this.session = {
      id: 'abcdef',
      user: {
        id: '12345',
        name: 'Kit Corry',
        email: 'kit@example.com',
        admin: true
      } 
    };

    this.evnt.emit(this.session);
  }
}
