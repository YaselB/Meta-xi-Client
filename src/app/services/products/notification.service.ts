import { Injectable} from '@angular/core';
import { ToastrService  } from 'ngx-toastr';


@Injectable({
    providedIn: 'root',
}
    
)
export class NotificationService {
    constructor(private toastr: ToastrService) {
    }
    correct(message: string) {
        console.log("Mostrando notificación de éxito:", message);
         this.toastr.success(message , '' ,{
            positionClass: 'toast-top-center',
            closeButton: true,
            timeOut: 5000,
            progressBar: true,
            tapToDismiss: true,
            progressAnimation: 'increasing',
         })   
    }
    errorMessage(message: string) {
        this.toastr.error(message , '' ,{
            positionClass: 'toast-top-center',
            closeButton: true,
            timeOut: 5000,
            progressBar: true,
            tapToDismiss: true,
            progressAnimation: 'increasing', 
        })
    }
    showCustomMessage(message: string, bgColor: string) {
        this.toastr.show(message, '', {
          timeOut: 3000,
          closeButton: true,
          toastClass: 'ngx-toastr custom-toastr', // Clase personalizada
          positionClass: 'toast-top-center', // Posición en la parte superior
        });
    
        // Agrega estilos dinámicos para el color de fondo
        const styles = `
          .custom-toastr {
            background-color: ${bgColor} !important;
            color: white !important;
            font-weight: bold;
          }
        `;
        const styleSheet = document.createElement('style');
        styleSheet.type = 'text/css';
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);
      }
}
