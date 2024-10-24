import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-notice',
  standalone: true,
  imports: [],
  templateUrl: './notice.component.html',
  styleUrl: './notice.component.scss'
})
export class NoticeComponent {

  @Output() open = new EventEmitter<boolean>();

  openModal(){
    this.open.emit(true);
  }

}
