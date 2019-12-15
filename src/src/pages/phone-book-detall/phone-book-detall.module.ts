import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhoneBookDetallPage } from './phone-book-detall';

@NgModule({
  declarations: [
    PhoneBookDetallPage,
  ],
  imports: [
    IonicPageModule.forChild(PhoneBookDetallPage),
  ],
})
export class PhoneBookDetallPageModule {}
