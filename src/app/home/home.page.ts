import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private firstName: string;
  private age:number;

  private buttonColor: string = "secondary";

  private fruitList: Array<string> = [
    "Pommes", "Poires", "Oranges" 
  ];

  private person:Object = {
    name: "Alphonse",
    address: "5 rue Orfila",
    country: "France"
  };

  private amountInEuro:number = 1;

  private changeRate: number = 124.95;

  constructor(){
    this.firstName = "Siobbhan";
  }

  changeName(){
    this.firstName = "Aileen";
    this.buttonColor = this.buttonColor=="danger"?"secondary":"danger";
  }
}
