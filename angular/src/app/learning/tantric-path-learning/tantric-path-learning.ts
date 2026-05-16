import {Component} from '@angular/core';
import {NavigationBar} from "../../navigation-bar/navigation-bar";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-tantric-path-learning',
  imports: [
    NavigationBar,
    RouterLink
  ],
  templateUrl: './tantric-path-learning.html',
  styleUrl: './tantric-path-learning.scss'
})
export class TantricPathLearning {
}
