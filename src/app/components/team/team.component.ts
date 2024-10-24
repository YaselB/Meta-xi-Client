import { Component } from '@angular/core';
import { InvitationComponent } from './components/invitation/invitation.component';
import { SelectionComponent } from './components/selection/selection.component';
import { LevelComponent } from './components/level/level.component';

const components = [InvitationComponent, SelectionComponent, LevelComponent];
@Component({
  selector: 'app-team',
  standalone: true,
  imports: [components],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
})
export class TeamComponent {}
