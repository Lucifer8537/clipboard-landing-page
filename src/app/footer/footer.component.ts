import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  mobileView!: boolean;
  @HostListener('window:resize', ['$event'])
  onResize() {
    console.log(window.innerWidth);
    if (window.innerWidth < 678) {
      this.mobileView = true;
    } else {
      this.mobileView = false;
    }
  }
  ngOnInit(): void {
    this.onResize();
  }
}
