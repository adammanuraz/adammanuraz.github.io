import {Component, inject} from '@angular/core';
import {NavigationBar} from "../../navigation-bar/navigation-bar";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-dominant-massage-woman',
  imports: [
    NavigationBar,
    RouterLink
  ],
  templateUrl: './dominant-massage-woman.html',
  styleUrl: './dominant-massage-woman.scss'
})
export class DominantMassageWoman {
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
