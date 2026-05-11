import { Component } from '@angular/core';
import {NavigationBar} from "../../navigation-bar/navigation-bar";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home-page',
    imports: [
        NavigationBar,
        RouterLink
    ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {

}
