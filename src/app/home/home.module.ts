import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// aqui
import { SignaturePadModule } from 'angular2-signaturepad';

import { HomePage } from './home.page';

@NgModule({
  // aqui
  providers: [ SignaturePadModule],

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // aqui
    SignaturePadModule,

    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
