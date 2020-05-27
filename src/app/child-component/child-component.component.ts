import { Component, OnInit, Output, EventEmitter, Input,  } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  @Output() select = new EventEmitter();
  @Input() name = '';

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.select.emit('selected Event from child');
  }

  onSelect() {
    this.select.emit('selected Event from new child');
  }
}
