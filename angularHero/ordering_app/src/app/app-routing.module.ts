import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';

const routes: Routes = [
  {path:"", redirectTo:"recipes", pathMatch:"full"},
  {path:"recipes",component:RecipesComponent, children:[
    {path:":id",component:RecipeDetailsComponent}
  ]},
  {path:"shopping", component:ShopingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
