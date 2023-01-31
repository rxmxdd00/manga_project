import { Component, Input, OnInit } from '@angular/core';
import { IDummyContent } from 'src/app/dummy-data/dummy';
import { Sample } from 'src/app/dummy-data/sample';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input () images : Sample [] = IDummyContent;
  @Input () indicators = true;
  @Input () autoSlide = true;
  @Input () slideInterval = 3000;
  selectedIndex = 0;
  ngOnInit(): void {
    if(this.autoSlide) {
      this.autoSlideImage();
    }
  }

  autoSlideImage():void{
    setInterval (() => {
      this.onNextClick();
    }, this.slideInterval);

  }

  onNextClick(): void{
    if(this.selectedIndex===0){
      this.selectedIndex = this.images.length-4;
    } else{
      this.selectedIndex--;
    }
  }
  //set index by selecting index
  selectedImage(index : number) : void{
    this.selectedIndex = index;
  }
}
