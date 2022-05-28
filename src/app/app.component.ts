import { Component } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LRP';
  source = from([
    { firstname: 'Joe', secondname:'carl', age: 30 },
    { firstname: 'Frank', secondname:'jim', age: 20 },
    { firstname: 'Ryan', secondname:'clarie', age: 50 }
  ]);
 ngOnInit(){
  let fsname = this.source.pipe(map(({firstname, secondname})=>{
    console.log(firstname);
    console.log(secondname);
  } ));
}


}

