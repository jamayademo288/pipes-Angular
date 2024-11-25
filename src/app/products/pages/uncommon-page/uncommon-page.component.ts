import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'Joel';
  public gender: 'male' | 'female' = 'male';
  public invittionMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  //i18n plural
  public clients: string[] = ['Maria', 'John', 'Paul', 'Christine', 'William', 'Peter', 'Linda'];
  public clientsMap = {
    '=0': 'No tenemos ningun cliente esperando',
    '=1': 'Tenemos un cliente esperando',
    'other': 'Tenemos # clientes esperando'
  }

  deleteClient(): void {
    this.clients.shift();
  }

  //KeyValue pipe
  public person = {
    name: 'John',
    age: 30,
    address: 'New York, USA'
  }

  //Async
  public myObservableTimer = interval(2000);

  public promiseValue: Promise<string> = new Promise( ( resolve, reject ) => {
    setTimeout(() => {
      resolve('Hello, Async Pipe!');
    }, 5000);
  })
}
