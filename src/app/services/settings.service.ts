import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private linkTheme = document.querySelector('#theme');
  constructor() {
    const theme =
      localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    this.linkTheme?.setAttribute('href', theme);
  }

  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme?.setAttribute('href', url);

    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
  }
  checkCurrentTheme() {
    const links: NodeListOf<Element> | undefined =
      document.querySelectorAll('.selector');
    links?.forEach((el: Element) => {
      el.classList.remove('working');
      const btnTheme = el.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme?.getAttribute('href');
      if (btnThemeUrl === currentTheme) {
        el.classList.add('working');
      }
    });
  }
}
