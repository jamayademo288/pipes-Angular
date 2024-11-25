import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower:string = 'joel';
  public nameUpper:string = 'JOEL';
  public fullName:string = 'jOeL AMaYa';

  public customDate: Date = new Date();

}
