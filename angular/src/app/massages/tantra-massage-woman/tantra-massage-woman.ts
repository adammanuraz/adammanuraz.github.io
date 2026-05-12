import {Component, inject} from '@angular/core';
import {NavigationBar} from "../../navigation-bar/navigation-bar";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-tantra-massage-woman',
  imports: [
    NavigationBar,
    RouterLink
  ],
  templateUrl: './tantra-massage-woman.html',
  styleUrl: './tantra-massage-woman.scss'
})
export class TantraMassageWoman {
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
