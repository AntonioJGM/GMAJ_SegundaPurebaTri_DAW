import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeriesServices } from '../../services/series.services';

@Component({
  selector: 'app-new-component',
  imports: [ ReactiveFormsModule ],
  templateUrl: './new-component.html',
  styleUrl: './new-component.css',
})
export class NewComponent {

  message: string = '';

  newForm = new FormGroup({
  title: new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ]),
  channel: new FormControl('', [
    Validators.required
  ]),
  rating: new FormControl('', [
    Validators.required,
    Validators.min(0),
    Validators.max(10)
  ])
  });

  get title() {
    return this.newForm.get('title');
  }

  get channel() {
    return this.newForm.get('channel');
  }

  get rating() {
    return this.newForm.get('rating');
  }

  constructor(
    private seriesService: SeriesServices,
    private router: Router
  ) {}

  onSubmit(): void {
    if (this.newForm.invalid) return;

    const payload = {
      id: 0,
      title: this.title?.value || '',
      channel: this.channel?.value || '',
      rating: Number(this.rating?.value || 0)
    }; 

     this.seriesService.create(payload).subscribe({
      next: (response: any) => {

        this.message = `Serie creada correctamente con ID: ${response.id}`;

        console.log('Payload a enviar:', payload, this.message);

        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 2000);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
