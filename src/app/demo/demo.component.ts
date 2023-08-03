import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit, OnChanges, DoCheck {
  @Input() name: string = 'Manender';

  constructor() {
    console.log('Constructor called');
    // console.log(this.name)
  }
  ngOnChanges(change: SimpleChanges) {
    console.log('ngOnchanges called');
    // console.log(this.name)
  }
  ngOnInit() {
    console.log('ngOnInit called');
    // console.log(this.name)
  }
  ngDoCheck() {
    console.log('ngDoCheck called');
  }
  hello() {
    console.log('hellooooo');
  }
  buffalo() {
    console.log('buffalooo');
  }
}
