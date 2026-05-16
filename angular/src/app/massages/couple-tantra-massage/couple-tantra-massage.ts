import {Component, inject, OnDestroy} from '@angular/core';
import {NavigationBar} from "../../navigation-bar/navigation-bar";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-couple-tantra-massage',
  imports: [
    NavigationBar,
    RouterLink
  ],
  templateUrl: './couple-tantra-massage.html',
  styleUrl: '../tantra-massage-man/tantra-massage-man.scss'
})
export class CoupleTantraMassage implements OnDestroy {
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
