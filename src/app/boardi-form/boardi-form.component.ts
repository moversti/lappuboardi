import { Component, OnInit } from '@angular/core';
import { Lappu } from '../lappu';

@Component({
  selector: 'app-boardi-form',
  templateUrl: './boardi-form.component.html',
  styleUrls: ['./boardi-form.component.css']
})
export class BoardiFormComponent implements OnInit {

  model: Lappu = new Lappu()
  isOpen = false

  onSubmit() {
    // TODO: sendaa lappu servicelle yms.
    this.model = new Lappu()
    this.isOpen = false
  }

  openForm() {
    this.isOpen = true
  }

  constructor() { }

  ngOnInit() {
  }

}
