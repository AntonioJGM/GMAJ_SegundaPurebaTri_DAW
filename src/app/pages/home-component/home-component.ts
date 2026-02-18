import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SeriesServices } from '../../services/series.services';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Serie } from '../../models/series';

@Component({
  selector: 'app-home-component',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {

  Series$!:Observable<Serie[]>;

  constructor(private series: SeriesServices) {
    this.Series$ = this.series.getAllSeries();
  }
}