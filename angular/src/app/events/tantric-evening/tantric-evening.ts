import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NavigationBar} from "../../navigation-bar/navigation-bar";
import {events as plannedEvents} from "../events";

@Component({
  selector: 'app-tantric-evening',
  imports: [
    NavigationBar,
    RouterLink
  ],
  templateUrl: './tantric-evening.html',
  styleUrl: './tantric-evening.scss'
})
export class TantricEvening {
  protected events = plannedEvents.filter(event => event.link === '/events/tantricky-vecer-zive-cesty');
}
