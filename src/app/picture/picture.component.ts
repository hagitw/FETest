import { Component,OnInit } from '@angular/core';
import { AppService } from '../app.service';
@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {
  url: string;
  arrUrl:any[]=new Array;
ngOnInit(){ 
  this.url = this.service.urlImg;
    this.SrotUrl( this.service.ArrUrl);
    console.log(this.arrUrl);
  }
  constructor(public service: AppService) {
   
  }
  SwitchImg(i: number) {
    console.log(i);
    this.url = this.arrUrl[i].url;
  }
  SrotUrl(arr: any) {
    for (var index = 0; index < this.service.ArrUrl.length; index++) {
      if (this.service.ArrUrl[index].url != "") {
        this.arrUrl.push(this.service.ArrUrl[index]);
      }
    }
  }
}
