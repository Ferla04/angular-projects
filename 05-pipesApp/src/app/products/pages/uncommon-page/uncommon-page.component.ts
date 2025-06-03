import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  // i18n Select
  name = 'Fernanda'
  gender: 'male' | 'female' = 'female'
  invitacionMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient() {
    this.name = this.name === 'Fernanda' ? 'Juan' : 'Fernanda'
    this.gender = this.gender === 'female' ? 'male' : 'female'
  }

  // i18n Plural
  clients = ['Fernanda', 'Juan', 'Pedro', 'Maria', 'Luis']
  clientsMap = {
    '=0': 'no hay ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient() {
    this.clients.pop()
  }

  restoreClients() {
    this.clients = ['Fernanda', 'Juan', 'Pedro', 'Maria', 'Luis']
  }

  // KeyValue Pipe
  person = {
    name: 'Fernanda',
    age: 30,
    address: 'Calle 123, Colonia Centro'
  }

  // Async Pipe
  myObservableTimer = interval(2000).pipe(tap(value => console.log('Timer', value)))

  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa resuelta!'), 3500)
  })
}
