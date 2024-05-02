import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NamesComponent } from './names/names.component';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NamesComponent, CommonModule, HighlightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'HomeWork39';
}
