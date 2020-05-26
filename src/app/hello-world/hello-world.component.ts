import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HelloWorldComponent implements OnInit {
  @Input() title;
  @Input() rname;
  @Input() occupation;
  @Input() location;
  @Input() first;

  @Output() display = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  showInfo() {
    this.display.emit("I am out!");
  }
}
