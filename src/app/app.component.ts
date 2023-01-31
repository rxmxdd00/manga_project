import { Component } from '@angular/core';
import {Sample} from './dummy-data/sample';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'manga_project';

  isFiltered = false;

  IContent : Sample[] = [];
}
