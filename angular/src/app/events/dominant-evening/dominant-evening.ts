import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NavigationBar} from "../../navigation-bar/navigation-bar";
import {events as plannedEvents} from "../events";

@Component({
  selector: 'app-dominant-evening',
  imports: [
    NavigationBar,
    RouterLink
  ],
  templateUrl: './dominant-evening.html',
  styleUrl: './dominant-evening.scss'
})
export class DominantEvening {
  protected events = plannedEvents.filter(event => event.link === '/events/dominantni-vecer-zive-cesty');
}
