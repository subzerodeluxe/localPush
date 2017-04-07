import { Component, Input } from '@angular/core';
import { ITimer } from "../i-timer/i-timer";
import { AlertController } from "ionic-angular";

@Component({
  selector: 'timer',
  templateUrl: 'timer.html'
})
export class TimerComponent {

   @Input() timeInSeconds: number;
    
    public timer: ITimer;

    constructor(public alertCtrl: AlertController) {}

    ngOnInit() {
        this.initTimer();
    }

    hasFinished() {
        return this.timer.hasFinished;
    }

    initTimer() {
        if(!this.timeInSeconds) { 
          this.timeInSeconds = 0; 
        }

        this.timer = <ITimer>{
            seconds: this.timeInSeconds,
            runTimer: false,
            hasStarted: false,
            hasFinished: false,
            secondsRemaining: this.timeInSeconds
        };

        this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
        this.timer.displayDate = this.formatDate(this.timer.secondsRemaining); 
        this.timer.daysLeft = this.getDaysLeft(this.timer.secondsRemaining); 

       
    }

    startTimer() {
        this.timer.hasStarted = true;
        this.timer.runTimer = true;
        this.timerTick();
    }

    pauseTimer() {
        this.timer.runTimer = false;
    }

    resumeTimer() {
        this.startTimer();
    }

    timerTick() {
        setTimeout(() => {
            if (!this.timer.runTimer) { return; }
            this.timer.secondsRemaining--;
            this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
            if (this.timer.secondsRemaining > 0) {
                this.timerTick();
            }
            else {
                this.timer.hasFinished = true;
                // show Alert 
                let alert = this.alertCtrl.create({
                  title: 'Time \'\s up!',
                  buttons: ['OK']
                })
                alert.present(); 
               
            }
        }, 1000);
    }

    getSecondsAsDigitalClock(inputSeconds: number) {
        
        var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
        var hours   = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);
        var hoursString = '';
        var minutesString = '';
        var secondsString = '';
        hoursString = (hours < 10) ? "0" + hours : hours.toString();
        minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
        secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
        return hoursString + ':' + minutesString + ':' + secondsString;
    }

    getDaysLeft(inputSeconds: number) {
        // REVERSE THE MAGIC: SET CURRENT DATE AND SECONDS 
        var currentDate = new Date(); 
        var newHours = currentDate.setHours(2); 
        var newMinutes = currentDate.setMinutes(0);
        var newSeconds = currentDate.setSeconds(0); 


        var currentSeconds = currentDate.getTime() / 1000; 

        // CALCULATE FINAL SECONDS 
        var final = inputSeconds + currentSeconds; 
        var deadline = new Date(final *1000); 

        // THE MAGIC 
        var msPerDay = 24 * 60 * 60 * 1000;
        var timeLeft = (deadline.getTime() - currentDate.getTime());
        var e_daysLeft = timeLeft / msPerDay;
        var daysLeft = Math.floor(e_daysLeft);
      
        console.log("Days left: " + daysLeft); 

        return daysLeft.toString() + " " + " Days left"; 
    }  

    formatDate(inputSeconds: number) {

      console.log("Deze seconden komen binnen: " + inputSeconds); 

      var monthNames = [
          "January", "February", "March",
          "April", "May", "June", "July",
          "August", "September", "October",
          "November", "December"
        ];

      var dayNames = [
        "Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday", 
      ];

      // REVERSE THE MAGIC: SET CURRENT DATE AND SECONDS 
      var currentDate = new Date(); 
      var newHours = currentDate.setHours(2); 
      var newMinutes = currentDate.setMinutes(0);
      var newSeconds = currentDate.setSeconds(0); 
      var currentSeconds = currentDate.getTime() / 1000; 

      // CALCULATE FINAL SECONDS 
      var final = inputSeconds + currentSeconds; 
      var newDate = new Date(final *1000); 

      console.log("Final seconds " + final); 
      var day = newDate.getDate();
      var dayIndex = newDate.getDay(); 
      var monthIndex = newDate.getMonth();
      var year = newDate.getFullYear();

      return dayNames[dayIndex] + ' ' + day + ' ' + monthNames[monthIndex] + ' ' + year;
     

    }

    

}
