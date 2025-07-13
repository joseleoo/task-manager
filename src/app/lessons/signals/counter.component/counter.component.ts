import { Component, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  // Writable signal
  counter = signal(0);

  // Computed signal
  doubleCounter = computed(() => this.counter() * 2);

  // Effect signal
  logEffect = effect(() => {
    console.log('Counter changed:', this.counter());
  });

  increment() {
    this.counter.update(n => n + 1);
  }

  decrement() {
    this.counter.update(n => n - 1);
  }

  reset(): void {
    this.counter.set(0);
  }
}
