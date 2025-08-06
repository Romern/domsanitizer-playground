import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { SecurityContext } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  input: string = '';
  sanitized: string = '';

  constructor(private sanitizer: DomSanitizer) {}

  sanitizeInput() {
    this.sanitized = this.sanitizer.sanitize(SecurityContext.HTML, this.input) || '';
  }
}
