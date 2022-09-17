import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [],
})
export class BreadcrumbsComponent implements OnDestroy {
  public pageTitle: string = '';
  public titleSub$: Subscription;
  constructor(private router: Router) {
    this.titleSub$ = this.getTitle().subscribe(({ title }) => {
      this.pageTitle = title;
    });
  }
  ngOnDestroy(): void {
    this.titleSub$.unsubscribe();
  }

  getTitle(): Observable<any> {
    return this.router.events.pipe(
      filter((event) => event instanceof ActivationEnd),
      filter((event: any) => event.snapshot.firstChild === null),
      map((event: any) => event.snapshot.data)
    );
  }
}
