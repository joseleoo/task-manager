import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Input() message: string = '';
  @Output() sendMessage = new EventEmitter<string>();

  send() {
    this.sendMessage.emit('Hello from Child!');
  }

  clearChild() {
    this.sendMessage.emit('');
  }
}
