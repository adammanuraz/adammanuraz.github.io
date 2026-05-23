import {Component, inject, OnDestroy} from '@angular/core';
import {NavigationBar} from "../../navigation-bar/navigation-bar";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-four-hand-dominant-massage',
  imports: [
    NavigationBar,
    RouterLink
  ],
  templateUrl: './four-hand-dominant-massage.html',
  styleUrl: '../tantra-massage-man/tantra-massage.scss'
})
export class FourHandDominantMassage implements OnDestroy {
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
