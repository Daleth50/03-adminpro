import { Component } from '@angular/core';

@Component({
  selector: 'app-nopagefound',
  templateUrl: './nopagefound.component.html',
  styleUrls: ['../../../assets/css/pages/error-pages.css'],
})
export class NopagefoundComponent {
  year: number = new Date().getFullYear();
}
