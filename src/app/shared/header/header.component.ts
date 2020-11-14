import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// import {PlatformModule} from '@angular/cdk/platform';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isMenuOpen: boolean = false;
  isLanguageChanged: boolean = false;

  constructor(
    private translate: TranslateService,
    // private platform: PlatformModule
    ) { }

  ngOnInit(): void {
  }

  // Toggle Collaps
  collapsToggle() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen == true) {
      document.body.classList.add('hidden');
    } else {
      document.body.classList.remove('hidden');
    }
  }

  // isLanguageToggle(lang) {
  //   this.isLanguageChanged = !this.isLanguageChanged;
  //   if (this.isLanguageChanged == true) {
  //     document.body.classList.add('rtl');

  //     // this.platform.setDir('ltr',true)

  //     // localStorage.setItem('hdaaeq_user_lang',lang)
  //     this.translate.setDefaultLang(lang);
  //     this.translate.use(lang);
  //     // this.event.publish('change_lang');
  //   } else {
  //     document.body.classList.remove('rtl');
  //   }
  // }

  isLanguageToggle(lang) {
    this.isLanguageChanged = !this.isLanguageChanged;
    if (lang === 'ar') {
      document.body.classList.add('rtl');

      // this.platform.setDir('ltr',true)

      localStorage.setItem('hdaaeq_user_lang',lang)
      this.translate.setDefaultLang(lang);
      this.translate.use(lang);
      // this.event.publish('change_lang');
    } else {
      document.body.classList.remove('rtl');
    }
  }



}
