import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-child',
  templateUrl: './new-child.component.html',
  styleUrls: ['./new-child.component.css']
})
export class NewChildComponent implements OnInit {
  @Output() select = new EventEmitter();
  @Input() name = '';

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.select.emit('selected Event from new child');
  }

}
