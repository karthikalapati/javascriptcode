import { Component, OnInit } from '@angular/core';
import { mapTo } from 'rxjs/operators';
import { interval, merge, Observable, of, map, filter, take } from 'rxjs';
@Component({
  selector: 'app-rxjsmerge',
  templateUrl: './rxjsmerge.component.html',
  styleUrls: ['./rxjsmerge.component.css']
})
export class RxjsmergeComponent implements OnInit {

  //emit every 2.5 seconds
  first = interval(2500);
  //emit every 2 seconds
  second = interval(2000);
  //emit every 1.5 seconds
  third = interval(1500);
  //emit every 1 second
  fourth = interval(1000);
  fifth = interval(500);

  example = merge(
    this.first.pipe(mapTo('FIRST!')),
    this.second.pipe(mapTo('SECOND!')),
    this.third.pipe(mapTo('THIRD')),
    this.fourth.pipe(mapTo('FOURTH')),
    this.fifth.pipe(mapTo('fifth'))
  );
  arr = [10,20,30,40];
  arr1: Observable<any> = of(...this.arr).pipe(map(item => item * 2));
  obs: Observable<number> = of(1,2,3,4,5,6);

  constructor() { }

  ngOnInit(): void {
    // Merge: The merge operator turns multiple observables in single observables
    // MAPTO:
    // PIPE: The pipe() function takes one or more operators and returns an RxJS Observable
    //let subscribe = this.example.subscribe(val => console.log(val));
    /*let obs1 = this.obs.pipe(filter(data => data%2 == 0), map(data=> data*10));
    //console.log(obs1.subscribe(value => console.log(value)));
    obs1.subscribe(
      next => console.log('next:', next),
      err => console.log('error:', err),
      () => console.log('Completed'),
    );
    let charset = of('a', 'b', 'c', 'd').pipe(
      take(3));
      charset.subscribe(
        next => console.log('next:', next),
        err => console.log('error:', err),
        () => console.log('Completed'),
      );*/

    // MaP : Transforms each emitter item.
      this.arr1.subscribe((data: any)=>{
        console.log(data);
      })
  }

}
