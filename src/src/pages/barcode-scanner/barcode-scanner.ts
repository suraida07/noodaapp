import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-barcode-scanner',
  templateUrl: 'barcode-scanner.html',
})
export class BarcodeScannerPage {

  ScanText = "";
  ScanFormat = "";

  constructor(private barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcodeScannerPage');
  }

  SCAN() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.ScanText = barcodeData.text;
      this.ScanFormat = barcodeData.format;
    }).catch(err => {
      console.log('Error', err);
    });
  }

}//end class
