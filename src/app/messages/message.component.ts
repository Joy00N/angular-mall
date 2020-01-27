import {Component, OnInit} from '@angular/core';
import {MessageService} from './message.service';

@Component({
  selector: 'pm-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  get messages() {
    return this.messageService.messages;
  }

  constructor(private messageService: MessageService) {
  }

  close(): void {

  }

  ngOnInit() {
  }

}
