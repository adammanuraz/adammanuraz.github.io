import {Component, inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NavigationBar} from "../navigation-bar/navigation-bar";

@Component({
  selector: 'app-events',
  imports: [
    NavigationBar
  ],
  templateUrl: './events.html',
  styleUrl: './events.scss'
})
export class Events {

  private activatedRoute = inject(ActivatedRoute);

  constructor() {
    console.log(this.activatedRoute.title)
    console.log(this.activatedRoute.url)
    console.log(this.activatedRoute.params)
    console.log(this.activatedRoute.component)

    this.activatedRoute.url.subscribe(value => {
      console.log(value);
    })
    this.activatedRoute.params.subscribe(value => {
      console.log(value);
    })
    this.activatedRoute.title.subscribe(value => {
      console.log(value);
    })
    this.activatedRoute.data.subscribe(value => {
      console.log(value);
      console.log(value['path']);
    })
  }
}
