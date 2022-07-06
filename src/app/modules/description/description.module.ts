import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DescriptionComponent } from './description.component';


@NgModule({
  declarations: [
    DescriptionComponent
  ],
  exports: [
    DescriptionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DescriptionComponent
      }
    ])

  ]

})
export class DescriptionModule { }

