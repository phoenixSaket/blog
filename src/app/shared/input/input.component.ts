import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() type: string;
  @Input() value: string;
  @Input() place: string;

  @Output() change: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.type ? this.type : "";
    this.value ? this.value : "";
    this.place ? this.place : "";
  }

  valueChanged(event: any) {
    console.log("Value : ", event.target.value);
    this.change.emit(event.target.value);
  }
}
