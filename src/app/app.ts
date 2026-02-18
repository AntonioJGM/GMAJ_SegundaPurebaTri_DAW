import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header-component/header-component';
import { FooterComponent } from './layout/footer-component/footer-component';
import { Observable } from 'rxjs';
import { Serie } from './models/series';
import { SeriesServices } from './services/series.services';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('GMAJ_PruebaTrimestral2_DWEC');

  series$: Observable<Serie[]>;

  constructor(private seriesService: SeriesServices) {
    this.series$ = this.seriesService.getAllSeries();
  }
}
