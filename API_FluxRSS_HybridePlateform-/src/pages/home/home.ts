import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConessionPage } from '../conession/conession';

import { NewsAPIService } from '../../services/newapi.service';
import { NewsApiGlobal } from  '../../models/NewsApiGlobal';

import { BLE } from '@ionic-native/ble';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  news_global : NewsApiGlobal = new NewsApiGlobal ();
  name : string;
  mdp : string ;
  devices :string [ ];
  isScanning : Boolean;
  constructor(public navCtrl: NavController, private newsAPIService : NewsAPIService, private bluetoothSerial: BluetoothSerial, private ble: BLE ) {

this.newsAPIService;
this.devices = [];
this.isScanning = false;
  }

   showConession()
  {
   this.navCtrl.push(ConessionPage, {
     nom : this.name,
     pwd : this.mdp 
   });
   console.log(this.name);
  }
   
   
showArticle()
{
  this.newsAPIService.getObjects()
  .then(newsFetched => 
        {
          this.news_global = newsFetched;
          console.log(this.news_global);
          this.navCtrl.push(ConessionPage,
          {
            news : this.news_global 
          }
          );
        }
       )
}
/*
startScanning2 () {
console.log("let go ");
this.devices = [];
this.isScanning = true;
BLE.startScan([]).subscribe(device => {
this.devices.push(device);
});*/
startScanning()
{
 console.log(this.bluetoothSerial.showBluetoothSettings());

}












}
