import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  isLanguageChanged: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  isLanguageToggle() {
    this.isLanguageChanged = !this.isLanguageChanged;
    if (this.isLanguageChanged == true) {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }
  }

}
