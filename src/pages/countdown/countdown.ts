import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TimerComponent } from "../../components/timer/timer";


@Component({
  selector: 'page-countdown',
  templateUrl: 'countdown.html'
})

export class CountdownPage {

  @ViewChild(TimerComponent) timer: TimerComponent; 

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CountdownPage');
  }

  incomingMessage = this.navParams.get('incomingMessage'); 
  text = this.navParams.get('text'); 

  inputSeconds: number; 

  setTimer() {
    this.timer.timeInSeconds = this.inputSeconds;
    this.timer.initTimer(); 
    console.log("Timer starts with " + this.inputSeconds); 
  }
 
  
  // start timer 
 /* ngOnInit() {
    setTimeout(() => {
      this.timer.startTimer();
    }, 1000)
  } */ 

}
