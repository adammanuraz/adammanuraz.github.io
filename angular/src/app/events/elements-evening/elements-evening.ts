import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NavigationBar} from "../../navigation-bar/navigation-bar";
import {events as plannedEvents} from "../events";

@Component({
  selector: 'app-elements-evening',
  imports: [
    NavigationBar,
    RouterLink
  ],
  templateUrl: './elements-evening.html',
  styleUrl: './elements-evening.scss'
})
export class ElementsEvening {
  protected events = plannedEvents.filter(event => event.link === '/events/vecer-zive-cesty-zivlu');
}
