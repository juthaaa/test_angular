import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  carousel_items = [
    {
      img: "assets/img/pexels-photo-710916.jpeg",
      title: "ทดสอบข้อมูลส่งออก",
      description: "http://www.jutha.co.th/test/test-data-output"
    },
    {
      img: "assets/img/salmon-dish-food-meal-46239.jpeg",
      title: "ทดสอบข้อมูลส่งออก",
      description: "http://www.jutha.co.th/test/test-data-output"
    },
    {
      img: "assets/img/pexels-photo-723198.jpeg",
      title: "ทดสอบข้อมูลส่งออก",
      description: "http://www.jutha.co.th/test/test-data-output"
    }
  ];

  cards : any;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.get('assets/card.json').subscribe((data) => {
      this.cards = data;
      localStorage.setItem('card', JSON.stringify(data));
    });
  }

}
