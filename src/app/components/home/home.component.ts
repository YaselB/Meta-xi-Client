import { Component } from '@angular/core';
import { NoticeComponent } from './components/notice/notice.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CompanyComponent } from './components/company/company.component';
import { TimeComponent } from './components/time/time.component';
import { ActionsCardComponent } from './components/actions-card/actions-card.component';
import { SliderComponent } from './components/slider/slider.component';
import { ActivityComponent } from './components/activity/activity.component';
import { MemberlistComponent } from './components/memberlist/memberlist.component';
import { ModalComponent } from './components/modal/modal.component';

const components = [
  NoticeComponent,
  CarouselComponent,
  ActionsCardComponent,
  CompanyComponent,
  TimeComponent,
  SliderComponent,
  ActivityComponent,
  MemberlistComponent,
  ModalComponent,
];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [components],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  modal: boolean = false;

  toggleModal(isOpen: boolean) {
    this.modal = isOpen;
  }
}
