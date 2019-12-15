import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-phone-book-detall',
  templateUrl: 'phone-book-detall.html',
})
export class PhoneBookDetallPage {
  //(1) proprty
  contact = {name: '', telephone: '', imageUrl: ''};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookDetallPage');
    this.contact = this.navParams.data;
    console.log(this.contact);
  }
  call(){
    window.open('tel:'+this.contact.telephone);
  }

}//end class