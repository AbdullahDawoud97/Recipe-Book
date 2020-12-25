import { NgModule } from "@angular/core";
import {Routes,RouterModule, PreloadingStrategy, PreloadAllModules} from '@angular/router';

import { HomeComponent } from "./core/home/home.component";

// import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes : Routes =[
    {path : '' , component: HomeComponent },
    {path : 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' }
    // {path : 'shopping-list', component: ShoppingListComponent},
]
@NgModule({
    imports : [ RouterModule.forRoot(appRoutes,)], // {PreloadingStrategy: PreloadAllModules}
    exports : [ RouterModule]
})
export class AppRoutingModule {

}