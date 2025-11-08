import {Component, inject, OnDestroy} from '@angular/core';
import {NavigationBar} from "../navigation-bar/navigation-bar";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-meditations',
    imports: [
        NavigationBar
    ],
  templateUrl: './meditations.html',
  styleUrl: './meditations.scss'
})
export class Meditations implements OnDestroy {
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
