import { Component, OnInit } from '@angular/core';
import { VideoService } from '../shared/video.service';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.css']
})
export class VideoplayerComponent implements OnInit {
 
  videoList:any = [];
  showMain:boolean = true;
  single:any;

  constructor(private ser: VideoService) {}
 
  ngOnInit(): void {
    this.getIndustryContent();
  }

  getIndustryContent(){
    this.ser.getIndustryContent()
    .subscribe(res=>{
      this.videoList = res;
    })
  }
  
  singleView(id: any){
    this.showMain = false;
    this.single = this.videoList[id];
    console.log(this.single);
  }
}
