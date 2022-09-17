import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  filter,
  interval,
  map,
  Observable,
  retry,
  Subscription,
  take,
} from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
})
export class RxjsComponent implements OnInit, OnDestroy {
  public intervalSubs: Subscription;

  constructor() {
    // const obs$ = new Observable((observer) => {
    //   let i = -1;
    //   const interval = setInterval(() => {
    //     i++;
    //     observer.next(i);
    //     if (i === 4) {
    //       clearInterval(interval);
    //       observer.complete();
    //     }

    //     if (i === 2) {
    //       i = 0;
    //       observer.error('I llegó a 2');
    //     }
    //   }, 1000);
    // });

    // obs$.pipe(retry(1)).subscribe({
    //   next: (valor) => console.log('Sub', valor),
    //   error: (error) => console.warn(error),
    //   complete: () => console.info('Obs terminado'),
    // });

    this.intervalSubs = this.retornaIntervalo().subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  ngOnInit(): void {}

  retornaIntervalo(): Observable<number> {
    return interval(100).pipe(
      // take(10),
      map((valor) => valor + 1),
      filter((valor) => valor % 2 === 0)
    );
  }
}
