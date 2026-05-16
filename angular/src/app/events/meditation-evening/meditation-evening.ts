import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NavigationBar} from "../../navigation-bar/navigation-bar";
import {events as plannedEvents} from "../events";

@Component({
  selector: 'app-meditation-evening',
  imports: [
    NavigationBar,
    RouterLink
  ],
  templateUrl: './meditation-evening.html',
  styleUrl: './meditation-evening.scss'
})
export class MeditationEvening {
  protected events = plannedEvents.filter(event => event.link === '/events/meditacni-vecer-zive-cesty');
}
