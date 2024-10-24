import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-memberlist',
  standalone: true,
  imports: [],
  templateUrl: './memberlist.component.html',
  styleUrls: ['./memberlist.component.scss'],
})
export class MemberlistComponent {
  userlist: any[] = [];

  constructor() {
    this.generateUserList();
    this.startScrolling()
  }

  generatePhoneNumber(): number {
    return Math.floor(Math.random() * 9000) + 1000;
  }

  generateRandomNumber(): number {
    return Math.floor(Math.random() * 200) + 1;
  }

  generateRandomID() {
    return Math.floor(Math.random() * 14) + 0;
  }

  generateUserList() {
    for (let i = 1; i <= 5; i++) {
      this.userlist.push({
        id: this.generateRandomID(),
        phoneNumber: this.generatePhoneNumber(),
        randomNumber: this.generateRandomNumber(),
      });
    }
  }

  scrollList() {
    this.userlist.shift();
    this.userlist.push({
      id: this.generateRandomID(),
      phoneNumber: this.generatePhoneNumber(),
      randomNumber: this.generateRandomNumber(),
    });
  }

  startScrolling() {
    setInterval(() => {
      this.scrollList();
    }, 1500); 
  }
}
