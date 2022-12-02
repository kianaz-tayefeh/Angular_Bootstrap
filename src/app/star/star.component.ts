import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnInit {
  star = faStar;

  @Input('starRating') rating: number = 2.5;
  width: number = 90;

  constructor() {}

  ngOnInit(): void {
    this.width = (this.rating * 90) / 5;
  }
}
