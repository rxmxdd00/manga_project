import { Component } from '@angular/core';
import { IDummyContent } from 'src/app/dummy-data/dummy';
import { Sample } from 'src/app/dummy-data/sample';

@Component({
  selector: 'app-card-gallery',
  templateUrl: './card-gallery.component.html',
  styleUrls: ['./card-gallery.component.css']
})
export class CardGalleryComponent {
  IContent : Sample[] = IDummyContent;
}
