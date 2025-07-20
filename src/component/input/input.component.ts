import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() value!: string;
  @Input() label!: string;
  @Input() type: string = 'text';
  @Output() onChange = new EventEmitter<string>();

  ngOnChanges(changes: string) {
    console.log('on changes', changes)
  }

  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value; // Update local value
    this.onChange.emit(this.value); // Emit event to parent with updated value
  }
}
