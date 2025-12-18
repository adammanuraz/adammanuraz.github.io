import {Component, inject, OnDestroy} from '@angular/core';
import {NavigationBar} from "../navigation-bar/navigation-bar";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-massages',
    imports: [
        NavigationBar,
        RouterLink
    ],
  templateUrl: './massages.html',
  styleUrl: './massages.scss'
})
export class Massages  implements OnDestroy {
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
