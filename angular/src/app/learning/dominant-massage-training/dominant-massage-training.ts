import {Component} from '@angular/core';
import {NavigationBar} from "../../navigation-bar/navigation-bar";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-dominant-massage-training',
  imports: [
    NavigationBar,
    RouterLink
  ],
  templateUrl: './dominant-massage-training.html',
  styleUrl: './dominant-massage-training.scss'
})
export class DominantMassageTraining {
}
