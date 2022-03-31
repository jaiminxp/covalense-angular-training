import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor(private cService: CommunicationService) {}

  ngOnInit(): void {}

  onActivate() {
    this.cService.activatedEvent.next(true);
  }
}
