import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMobile: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

 /* @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    console.log('event ', event.target.innerWidth);
    if(event.target.innerWidth <= 700) {
      this.isMobile == true;
      console.log('is true')
    }
  }*/

}
