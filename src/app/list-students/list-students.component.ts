import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  @Output() ListClicked = new EventEmitter<any>();
  flag;

  list(){
    this.flag = print;
    this.ListClicked.emit({mode: this.flag});
  }

  constructor() { }

  ngOnInit() {
  }

}
