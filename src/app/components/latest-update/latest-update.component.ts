import { Component } from '@angular/core';
import { Sample } from 'src/app/dummy-data/sample';
import { IDummyContent } from 'src/app/dummy-data/dummy';
@Component({
  selector: 'app-latest-update',
  templateUrl: './latest-update.component.html',
  styleUrls: ['./latest-update.component.css']
})
export class LatestUpdateComponent {
  arr = [];
  IContent : Sample[] = IDummyContent;

  compareChapters (x:any){
    console.log(x);
  }
}
