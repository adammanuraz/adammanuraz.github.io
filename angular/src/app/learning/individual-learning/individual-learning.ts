import {Component} from '@angular/core';
import {NavigationBar} from "../../navigation-bar/navigation-bar";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-individual-learning',
  imports: [
    NavigationBar,
    RouterLink
  ],
  templateUrl: './individual-learning.html',
  styleUrl: './individual-learning.scss'
})
export class IndividualLearning {
}
