import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { BrandsComponent } from './components/brands/brands.component';
import { HomeComponent } from './components/home/home.component';
import {SharedModule} from './shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import { CatalogComponent } from './components/catalog/catalog.component';
import {MainFilterComponent} from "./components/main-filter/main-filter.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'catalog', component: CatalogComponent}
];

@NgModule({
  declarations: [
    SearchComponent,
    BrandsComponent,
    HomeComponent,
    CatalogComponent,
    MainFilterComponent
  ],
  imports: [RouterModule.forRoot(routes), SharedModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
