import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChildren("path") paths!: QueryList<ElementRef>;
  @ViewChild("dialogContainer") container!: ElementRef;
  @ViewChild("bannerName") bannerName!: ElementRef;
  title = 'OliverLancePortfolio';
  duration = 0

  constructor() {}

  scrollToContent () {
    document.getElementById('projects-content')?.scrollIntoView();
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.calcPaths()
    this.container.nativeElement.classList.add('animated');
    this.bannerName.nativeElement.classList.add('hide');
    setTimeout(() => {
      this.bannerName.nativeElement.classList.remove('hide');
      this.calcPaths()
    }, (this.duration * 1000)+1500);
  }

  showSignature() {
    this.container.nativeElement.classList.add('animated');
  }

  // from https://www.silvestar.codes/articles/how-to-animate-svg-signature/
  calcPaths() {
    this.container.nativeElement.classList.remove('animated');
    
    let len = 0
    let delay = 0
  
    // escape if no elements found
    if (!this.paths.length) {
      return false
    }
    // set duration in seconds of animation to default if not set
    const totalDuration = 2

    // calculate the full path length
    this.paths.forEach((path: ElementRef) => {
      const totalLen = path.nativeElement.getTotalLength()
      len += totalLen
    })

    this.paths.forEach((path: ElementRef) => {
      const pathElem = path
      // get current path length
      const totalLen = path.nativeElement.getTotalLength()
      // calculate current animation duration
      const duration = totalLen / len * totalDuration

      // set animation duration and delay
      pathElem.nativeElement.style.animationDuration = `${duration < 0.2 ? 0.2 : duration}s`
      pathElem.nativeElement.style.animationDelay = `${delay}s`

      // set dash array and offset to path length - this is how you hide the line
      pathElem.nativeElement.setAttribute('stroke-dasharray', totalLen)
      pathElem.nativeElement.setAttribute('stroke-dashoffset', totalLen)

      // set delay for the next path - added .2 seconds to make it more realistic
      delay += duration
    })

    this.duration = delay

    return true
  }

  profileHoverEnter() {
    // set 'animated' class to body which will start the animation
    this.showSignature()
    this.bannerName.nativeElement.classList.add('hide');
  }

  profileHoverLeave() {
    // clears signature
    this.calcPaths()
    this.bannerName.nativeElement.classList.remove('hide');
  }
}
