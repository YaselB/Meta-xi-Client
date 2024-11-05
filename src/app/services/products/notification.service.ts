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
}
