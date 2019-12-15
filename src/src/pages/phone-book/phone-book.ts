import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class PhoneBookPage {
  
  contactArry = [{name: 'da',telephone: '0821111111',imageUrl: 'assets/imgs/11.jpg'}
                  ,{name: 'daa',telephone: '0821111112',imageUrl: 'assets/imgs/22.jpg'}
                  ,{name: 'daaa',telephone: '0821111113',imageUrl: 'assets/imgs/33.jpg'}
                  ,{name: 'daaa',telephone: '0821111114',imageUrl: 'assets/imgs/44.jpg'}
                ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookPage');
  }

  viewDetail(item) {
    this.navCtrl.push("PhoneBookDetallPage", item);
  }

}
