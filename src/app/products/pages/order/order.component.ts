import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  public isUpperCase: boolean = false;
  public orderBy: keyof Hero | undefined | '' = '';

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Wonder Woman',
      canFly: true,
      color: Color.red
    },
    {
      name: 'Green Arrow',
      canFly: false,
      color: Color.green
    }
  ];

  ngOnInit(): void {

  }

  toggleToUpperCase(): void {
    this.isUpperCase =!this.isUpperCase;
  }

  changeOrder( value: keyof Hero ) {
    this.orderBy = value;
  }

}
