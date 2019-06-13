import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.gimmesomeoven.com/wp-content/uploads/2018/10/Autumn-Wild-Rice-Soup-Recipe-4.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),
      ]),
    new Recipe(
      'Another Recipe',
      'This is simply a test',
      'https://www.gimmesomeoven.com/wp-content/uploads/2018/10/Autumn-Wild-Rice-Soup-Recipe-4.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
      ]),
  ];

  constructor(private slService: ShoppingListService) {

  }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
      this.slService.addIngredients(ingredients);
  }
}
