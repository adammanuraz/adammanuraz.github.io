import { Component } from '@angular/core';
import {routes} from "./shadow-path.routes";
import {RouterOutlet} from "@angular/router";
import {NavigationBar} from "../../navigation-bar/navigation-bar";

@Component({
  selector: 'app-shadow-path',
  imports: [
    RouterOutlet,
    NavigationBar
  ],
  templateUrl: './shadow-path.html',
  styleUrl: './shadow-path.scss'
})
export class ShadowPath {
  protected readonly routes = routes;

}
