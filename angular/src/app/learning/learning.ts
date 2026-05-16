import {Component} from '@angular/core';
import {NavigationBar} from "../navigation-bar/navigation-bar";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-learning',
  imports: [
    NavigationBar,
    RouterLink
  ],
  templateUrl: './learning.html',
  styleUrl: './learning.scss'
})
export class Learning {
}
