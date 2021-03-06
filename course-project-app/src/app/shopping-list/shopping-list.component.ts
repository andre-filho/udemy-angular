import { Component, OnInit } from '@angular/core';

import { Ingredient } from './../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients :Ingredient[] = [
    new Ingredient('apple', 5),
    new Ingredient('tomatoes', 2)
  ];

  constructor() { }

  ngOnInit() {
  }

  addIngredient(event :Ingredient) {
    this.ingredients.push(event);
    console.log(this.ingredients);
  }

}
