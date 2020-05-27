import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  @Input() title;

  @Output() display = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  showInfo() {
    this.display.emit("I am out!");
  }

  onSelect() {
    this.display.emit("I am from child!");
  }
}
