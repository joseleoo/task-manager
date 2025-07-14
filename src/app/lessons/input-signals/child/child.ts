import { Component, input, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  message = input('');
  // @Output() sendMessage = new EventEmitter<string>();

  sendMessage = output<string>();

  send() {
    this.sendMessage.emit('Hello from Child!');
  }

  clearChild() {
    this.sendMessage.emit('');
  }
}

// ➡️ No need for EventEmitter or @Output()
// ➡️ Use .emit() like before, but it's a signal event now.