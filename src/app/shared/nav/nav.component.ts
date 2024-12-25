import { CommonModule, NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, HostListener, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { NotificationService } from '../../services/products/notification.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgClass ,CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent implements OnInit {
  isMeRoute = false;
  isScrolled = false;
  isLogined = false;
  showModal = false;
  username : string = localStorage.getItem('username') || '';
  Bonus : number = 2500;
  address : string = 'assets/icons/BonodeBienvenida.png';
  isClaimed : boolean = false;
  constructor(private http: HttpClient,
    private notificationService: NotificationService,
  ) {}

  private router = inject(Router);

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLogined = event.urlAfterRedirects === '/login';
        if (!this.isLogined) {
          this.isMeRoute = event.urlAfterRedirects === '/me';
        }
      }
    });
    this.ngBonusClaimed();
  }
  async ngBonusClaimed(){
    const url = 'https://meta-api-production-3abd.up.railway.app/api/Wallet/ClaimWelcomeBonus/'+this.username;
    try {
      const response = await firstValueFrom(this.http.get(url));
      console.log(response);
      this.address = 'assets/icons/BonodeBienvenida.png';
      this.isClaimed = false;
    } catch (error) {
      console.error(error);
      this.address = 'assets/new/AddText_09-22-05.29.16.png';
      this.isClaimed = true;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 0;
  }
  toggleModal(){
    if(this.isClaimed){
      this.router.navigate(['/vip']);
    }else{
      this.showModal = !this.showModal;
    }
    
  }
  
  async GetBonus(){
    const url = 'https://meta-api-production-3abd.up.railway.app/api/Wallet/ClaimWelcomeBonus';
    const data = {
      email: this.username ,
      token: 'nequi' ,
      balance: 2500,
    };
    
    try {
      await firstValueFrom(this.http.post(url,data));
      this.notificationService.correct("Bono reclamado exitosamente");
      this.isClaimed = true;
      this.address = 'assets/new/AddText_09-22-05.29.16.png';
    } catch (error) {
      this.notificationService.errorMessage("Error al reclamar bono");
    }
    this.showModal = !this.showModal;
    window.location.reload();
  }
}
