import {Component, inject, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NavigationBar} from "../navigation-bar/navigation-bar";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-events',
  imports: [
    NavigationBar
  ],
  templateUrl: './events.html',
  styleUrl: './events.scss'
})
export class Events implements OnDestroy {
  protected path = '';

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
