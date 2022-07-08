import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { GameCardComponent } from './components/game-card.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    HomeComponent,
    GameCardComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      }
    ])
  ]

})
export class HomeModule { }
