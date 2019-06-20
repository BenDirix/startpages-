import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {
  links = [
    {name: 'Twitter', link: 'https://www.twitter.com/'},    
    {name: 'Github', link: 'https://www.github.com/'},
    {name: 'Youtube', link: 'https://www.youtube.com/'},
    {name: 'Twitch', link: 'https://www.twitch.com/'},
    {name: 'Reddit', link: 'https://www.reddit.com/'},
    {name: 'Netflix', link: 'https://www.netflix.com'},

  ]
  time: string;
  today: string;

  constructor() { }

  ngOnInit() {  
    this.getTime()   
    this.getDate(); 
    setInterval(()=>{
      this.getTime();
      
    },1000)
    
  }
  private getDate(){
    let today = new Date();
    // let day = today.getDay();
    // let month = today.getMonth();
    // let year = today.getFullYear();
    // this.today = `${day}/${month}/${year}`
    this.today = today.toDateString();
  }
  private getTime(){
    let today = new Date();
      let hours = this.checkTime(today.getHours());
      let minutes = this.checkTime(today.getMinutes());
      let seconds = this.checkTime(today.getSeconds());
      this.time = `${hours}:${minutes}:${seconds}`
  }

  private checkTime(time){
    if(time < 10){
      time = '0' + time;
    }
    return time;
  }

}
