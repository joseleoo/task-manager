import { Component } from '@angular/core';
import { Child as ChildComponent } from '../child/child';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  parentMessage = '';
  message = '';
  
  sendMessage() {
    this.parentMessage = 'Hello from parent!';
  }
  
  handleMessage(msg: string) {
    this.message = msg;
  }

  clearMessages() {
    this.parentMessage = '';
    this.message = '';
  }
}
