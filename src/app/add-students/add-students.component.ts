import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent implements OnInit {

  @Output() AddClicked = new EventEmitter<any>();
  @Input() message;
  flag = 'add';
  add(){
    this.AddClicked.emit({mode: this.flag});
  }
  constructor() { }

  ngOnInit() {
  }

}
