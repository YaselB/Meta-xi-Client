import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

const appProviders = {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideHttpClient(),
    provideAnimations(),  // Proveedores de animaciones requeridas
    provideToastr({       // Proveedores de Toastr
      positionClass: 'toast-top-center',
      preventDuplicates: true,
      timeOut: 5000,
      progressBar: true,
      tapToDismiss: true,
      progressAnimation: 'increasing',
    })
  ]
}

bootstrapApplication(AppComponent, appProviders)
  .catch((err) => console.error(err));
