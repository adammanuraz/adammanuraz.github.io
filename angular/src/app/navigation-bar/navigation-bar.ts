import {Component, inject, Input} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";

@Component({
  selector: 'app-navigation-bar',
    imports: [
        RouterLink
    ],
  templateUrl: './navigation-bar.html',
  styleUrl: './navigation-bar.scss'
})
export class NavigationBar {
  protected path = '';

  private activatedRoute = inject(ActivatedRoute);

  constructor() {
    this.activatedRoute.data.subscribe(value => {
      let htmlClassList = document.querySelector('html')?.classList
      if (this.path) {
        htmlClassList?.remove(this.path);
      }
      this.path = value['path'] ?? '';
      if (this.path) {
        htmlClassList?.add(this.path);
      }
    })
  }
}
