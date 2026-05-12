import {Component, inject} from '@angular/core';
import {NavigationBar} from "../../navigation-bar/navigation-bar";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shamanic-masssage',
  imports: [
    NavigationBar,
    RouterLink
  ],
  templateUrl: './shamanic-masssage.html',
  styleUrl: './shamanic-masssage.scss'
})
export class ShamanicMasssage {
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
