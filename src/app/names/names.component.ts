import { CommonModule } from '@angular/common';
import { Component, asNativeElements } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-names',
  standalone: true,
  imports: [CommonModule, HighlightDirective],
  templateUrl: './names.component.html',
  styleUrl: './names.component.scss',
})
export class NamesComponent {
  myName: string[] = [];
  addElement() {
    let importNames: any = (
      document.getElementById('names') as HTMLInputElement
    ).value;
    this.myName.push(importNames);

    (document.getElementById('names') as HTMLInputElement).value = '';
  }
}
