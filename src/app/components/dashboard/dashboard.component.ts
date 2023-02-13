import { Component } from '@angular/core';
import { Sample } from 'src/app/dummy-data/sample';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  isFiltered = false;

  IContent : Sample[] = [];
}
