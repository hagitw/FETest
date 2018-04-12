import { Root, Child } from './../module/module';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  root: Root;
  constructor(public Service: AppService, public router: Router) { }

  ngOnInit() { }
  width: number = 40;
  height: number = 40;

  ClickO() {
    this.Service.GetRoot().subscribe(res => {
      this.root = res.json();
      this.SortArr(this.root);
      console.log(this.root.data.children);
      (err) => { console.log("Error" + err) }
    });
    console.log("click");
    console.log(this.root.data.children[3].url);
  }
  GetImg(i: number) {
    if (this.root.data.children[i].url == '') {
      console.log("Not Have A Url");
    }
    else {
      console.log(i + 'redirct to pictuer');
      this.Service.ArrUrl = this.root.data.children;
      this.Service.urlImg = this.root.data.children[i].url;
      this.router.navigate(['./Picture/']);
    }
  }
  SortArr(arr: any) {
    let child: Child;
    for (var index = 0; index < this.root.data.children.length; index++) {
      if (this.root.data.children[index].url == undefined) {
        child = {
          type: this.root.data.children[index].type,
          label: this.root.data.children[index].label,
          url: ''}
        this.root.data.children[index] = child;
      }
    }
  }

}