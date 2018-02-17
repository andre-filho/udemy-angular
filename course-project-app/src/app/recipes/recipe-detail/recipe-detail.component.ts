import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input('recipeToBeDetailed') recipe :Recipe;

  constructor() {
  }
  
  // eliminates the error caused by an empty element. this is here because this
  // method is called before the constructor().
  ngOnInit() {
    // this.recipe = new Recipe('', '', '');
  }

}
