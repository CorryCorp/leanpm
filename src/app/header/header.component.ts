import { Component, Input } from '@angular/core';

import { Session } from '../model/session';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isAdmin = true;
  @Input() session: Session;
}