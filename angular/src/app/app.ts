import {Component, inject, signal} from '@angular/core';
import {ActivatedRoute, Router, RouterLink, RouterOutlet} from '@angular/router';
import {routes} from "./app.routes";

@Component({
  selector: 'app-root',
    imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('zivacesta');
  protected readonly routes = routes;
  private activatedRoute = inject(ActivatedRoute);

  constructor(private router: Router) {
    console.log(this.activatedRoute.title)
    console.log(this.activatedRoute.url)
    console.log(this.activatedRoute.params)
    console.log(this.activatedRoute.component)

    this.activatedRoute.url.subscribe(value => {
      console.log(value);
    })
    this.activatedRoute.params.subscribe(value => {
      console.log(value);
    })
    this.activatedRoute.title.subscribe(value => {
      console.log(value);
    })
    this.activatedRoute.data.subscribe(value => {
      console.log(value);
      console.log(value['path']);
    })
    this.activatedRoute.queryParams.subscribe(value => {
      console.log(value);
    })

    console.log('ulr', router.url);
    console.log(router);

  }
}
