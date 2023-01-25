import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TodosComponent} from './todos/todos.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'task3';
  constructor( private router: Router,private activatedRoute: ActivatedRoute) {}
  value!:any;
  currentVal!:string;

  updateCurrentVal(val:any) {
    this.currentVal = val;
  }
  navigate(){
    this.router.navigate(['/']).then(() => {
      this.router.navigate(["/",this.currentVal, {foo:this.value}]);
      // this.router.navigate(["/comments", {foo:this.value}], {relativeTo: this.activatedRoute});
      // this.router.navigate(["/todos", {foo:this.value}], {relativeTo: this.activatedRoute});
      // this.router.navigate(["/photos", {foo:this.value}], {relativeTo: this.activatedRoute});
      // this.router.navigate(["/albums", {foo:this.value}], {relativeTo: this.activatedRoute});
    });
/*     this.router.navigate(["/posts", {foo:this.value}], {relativeTo: this.activatedRoute}).then(() =>{
      // this.Todo.ngOnInit();
    }); */
   }
}