import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  nameLower: string = 'fernando';
  nameUpper: string = 'FERNANDO';
  fullName: string = 'FeRnAnDo'

  customDate: Date = new Date();
}
