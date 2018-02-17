import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from './../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'simple desc', 'https://www.campbellsoup.co.uk/img/recipes/6-campbells-vegetarian-pizza-recipe.jpg'),
    new Recipe('Another Test Recipe', 'simple desc', 'https://www.campbellsoup.co.uk/img/recipes/6-campbells-vegetarian-pizza-recipe.jpg')
  ];

  @Output('selectedItem') selected = new EventEmitter<Recipe>(); 

  treatSelectedItem(event) {
    console.log(event);
    this.selected.emit(event);
  }

  constructor() { }

  ngOnInit() {
  }

}
