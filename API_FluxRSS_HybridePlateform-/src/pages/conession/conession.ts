import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { NewsAPIService } from '../../services/newapi.service';


@Component({
  selector: 'page-conession',
  templateUrl: 'conession.html'
})
export class ConessionPage {

  connexion_name : string;
  connexion_mdp : string ;
  news : NewsAPIService ;


  constructor(public navCtrl: NavController, private params: NavParams) {
this.connexion_mdp = params.get('pwd');
this.connexion_name = params.get('nom');
this.news = params.get("news");

console.log("Dans la nouvelle page on a comme param : mdp = " + this.connexion_mdp);
  }

}
