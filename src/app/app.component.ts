import { Component } from '@angular/core';
import { Session } from './model/session';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'leanpm.io';
  isLoggedIn = true;

  session: Session = {
    id: '',
    user: {
      id: '',
      name: '',
      email: '',
      admin: false
    }
  };

  onLogin(session:Session) {
    this.session = session;
  }
}
