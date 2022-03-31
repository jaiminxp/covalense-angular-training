import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
})
export class RootComponent implements OnInit {
  isActivated: boolean = false;
  constructor(private cService: CommunicationService) {}

  ngOnInit(): void {
    this.cService.activatedEvent.subscribe((activated) => {
      this.isActivated = activated;
    });
  }
}
