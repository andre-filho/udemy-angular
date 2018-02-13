import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.module';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input('recipe-item') item :Recipe;
  
  @Output('itemWasSelected') clickEvent  = new EventEmitter<Recipe>();

  selectItem() {
    console.log(this.item);
    this.clickEvent.emit(this.item);
  }

  constructor() { }

  ngOnInit() {
  }

}
