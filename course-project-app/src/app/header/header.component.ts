import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  recipeOrShopping :boolean;  // false = recipe
                              // true  = shopping list

  @Output('onNavChange') navChange = new EventEmitter<boolean>();

  constructor() {
    this.recipeOrShopping = false;
  }

  ngOnInit() {
  }

  showRecipes() {
    this.recipeOrShopping = false;
    console.log(this.recipeOrShopping);
    this.navChange.emit(
      this.recipeOrShopping
    )
    // return this.recipeOrShopping;
  }

  showShopList() {
    this.recipeOrShopping = true;
    console.log(this.recipeOrShopping);
    this.navChange.emit(
      this.recipeOrShopping
    )
    // return this.recipeOrShopping;
  }

}
