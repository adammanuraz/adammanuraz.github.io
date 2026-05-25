import {Component, HostListener, inject} from '@angular/core';
import {NavigationBar} from "../../navigation-bar/navigation-bar";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-tantra-massage',
  imports: [
    NavigationBar,
    RouterLink
  ],
  templateUrl: './tantra-massage.html',
  styleUrl: './tantra-massage.scss'
})
export class TantraMassage {
  protected path = '';
  protected isReservationModalOpen = false;

  private activatedRoute = inject(ActivatedRoute);
  mySubscription: Subscription;

  constructor() {
    this.mySubscription = this.activatedRoute.data.subscribe(value => {
      this.path = value['path'] ?? '';
    })
  }

  protected openReservationModal() {
    this.isReservationModalOpen = true;
  }

  protected closeReservationModal() {
    this.isReservationModalOpen = false;
  }

  @HostListener('document:keydown.escape')
  protected closeReservationModalOnEscape() {
    this.closeReservationModal();
  }

  ngOnDestroy() {
    this.mySubscription.unsubscribe();
  }
}
