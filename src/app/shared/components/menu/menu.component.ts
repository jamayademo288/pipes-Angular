import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuItems: MenuItem[] = [];

  ngOnInit() {
      this.menuItems = [
          {
              label: 'Pipes de Angular',
              icon: 'pi pi-desktop',
              items: [
                //{ label: '', icon: '', routerLink: ['/'] },
                {
                  label: 'Textos y Fechas',
                  icon: 'pi pi-align-left',
                  routerLink: ['/']
                },
                {
                  label: 'Números',
                  icon: 'pi pi-dollar',
                  routerLink: ['/numbers-page']
                },
                {
                  label: 'No Comunes',
                  icon: 'pi pi-globe',
                  routerLink: ['/uncommon-page']
                }

              ]
          },
          {
            label:'Pipes Personalizados',
            icon: 'pi pi-cog',
            items: [
              {
                label: 'Custom',
                icon: 'pi pi-palette',
                routerLink: ['/custom']
              },
            ]
          }
      ];
  }
}
