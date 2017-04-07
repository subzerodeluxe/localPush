import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TimerComponent } from "../../components/timer/timer";
import * as moment from 'moment';


@Component({
  selector: 'page-countdown',
  templateUrl: 'countdown.html'
})

export class CountdownPage {

  @ViewChild(TimerComponent) timer: TimerComponent; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CountdownPage');
  }

  incomingMessage = this.navParams.get('incomingMessage'); 
  text = this.navParams.get('text'); 

  inputSeconds: number; 
  inputDate: any; 

  setTimer() {
    //this.timer.timeInSeconds = this.inputSeconds;
   // this.timer.initTimer(); 


      var inputD = this.inputDate; 
      
      // date input (deadline) to seconds 
      var correctDate = new Date(inputD); 
      console.log("What is the date? " + correctDate); 
      var deadlineSeconds =  correctDate.getTime() / 1000;
      console.log("Seconds: " + deadlineSeconds)

      // get current Date 
      var date = new Date(); 
      var newHours = date.setHours(2); 
      var newMinutes = date.setMinutes(0);
      var newSeconds = date.setSeconds(0); 
      console.log("Minutes: " + newMinutes + "seconds: " + newSeconds + " New hours: " + newHours); 

      var currentSeconds = date.getTime() / 1000; 
      console.log("Date: " + date + " " + "Current seconds: " + currentSeconds); 


      var finalSeconds = deadlineSeconds - currentSeconds; 
     
      
      // SET THE TIMER 
      this.timer.timeInSeconds = finalSeconds; 
      this.timer.initTimer();

      // GET inputSeconds
      // 
      
  }

 
 
  
  // start timer 
 /* ngOnInit() {
    setTimeout(() => {
      this.timer.startTimer();
    }, 1000)
  } */ 
  
}
