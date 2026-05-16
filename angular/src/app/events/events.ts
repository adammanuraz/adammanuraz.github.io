import {Component, inject, OnDestroy} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {NavigationBar} from "../navigation-bar/navigation-bar";
import {Subscription} from "rxjs";

export const events = [
  {
    date: 'pátek 14. srpna 2026',
    name: 'Večer Živé cesty tantry',
    link: '/events/tantricky-vecer-zive-cesty'
  },
  {
    date: 'pátek 28. srpna 2026',
    name: 'Večer Živé cesty stínu',
    link: '/events/dominantni-vecer-zive-cesty'
  },
  {
    date: 'pátek 11. září 2026',
    name: 'Večer Živé cesty energie',
    link: '/events/meditacni-vecer-zive-cesty'
  },
  {
    date: 'pátek 2. října 2026',
    name: 'Večer Živé cesty živlů',
    link: '/events/vecer-zive-cesty-zivlu'
  },
  {
    date: 'pátek 16. října 2026',
    name: 'Večer Živé cesty tantry',
    link: '/events/tantricky-vecer-zive-cesty'
  },
  {
    date: 'pátek 20. listopadu 2026',
    name: 'Večer Živé cesty stínu',
    link: '/events/dominantni-vecer-zive-cesty'
  },
  {
    date: 'pátek 4. prosince 2026',
    name: 'Večer Živé cesty energie',
    link: '/events/meditacni-vecer-zive-cesty'
  },
  {
    date: 'pátek 18. prosince 2026',
    name: 'Večer Živé cesty živlů',
    link: '/events/vecer-zive-cesty-zivlu'
  }
];

@Component({
  selector: 'app-events',
  imports: [
    NavigationBar,
    RouterLink
  ],
  templateUrl: './events.html',
  styleUrl: './events.scss'
})
export class Events implements OnDestroy {
  protected path = '';
  protected events = events;

  private activatedRoute = inject(ActivatedRoute);
  mySubscription: Subscription;

  constructor() {
    this.mySubscription = this.activatedRoute.data.subscribe(value => {
      this.path = value['path'] ?? '';
    })
  }

  ngOnDestroy() {
    this.mySubscription.unsubscribe();
  }
}
