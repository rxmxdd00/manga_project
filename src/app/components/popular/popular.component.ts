import { Component } from '@angular/core';
import { Sample } from 'src/app/dummy-data/sample';
import { IDummyContent } from 'src/app/dummy-data/dummy';
@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent {
  IContent : Sample[] = IDummyContent;
}
