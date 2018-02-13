import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.module';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipe :Recipe;

  treatItem(event) {
    console.log(event);    
    this.recipe = event;
  }

  constructor() { }

  ngOnInit() {
  }

}
