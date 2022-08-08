import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Main', url: '/' },
        { title: 'progressBar', url: 'progress' },
        { title: 'Graficaas', url: 'grafica1' },
      ],
    },
  ];

  constructor() {}
}
