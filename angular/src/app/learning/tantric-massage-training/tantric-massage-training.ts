import {Component} from '@angular/core';
import {NavigationBar} from "../../navigation-bar/navigation-bar";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-tantric-massage-training',
  imports: [
    NavigationBar,
    RouterLink
  ],
  templateUrl: './tantric-massage-training.html',
  styleUrl: './tantric-massage-training.scss'
})
export class TantricMassageTraining {
}
