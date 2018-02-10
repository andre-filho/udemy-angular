import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  showShoppingList :boolean = false; // false = recipes, true = shopping list

  onUpdateView(booleanValue) {
    this.showShoppingList = booleanValue;
  }

}
