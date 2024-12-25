import { Component, Input } from '@angular/core';
import { TelegramService } from '../../../../services/products/Telegram.service';
import { NotificationService } from '../../../../services/products/notification.service';

@Component({
  selector: 'app-fileupload',
  standalone: true,
  imports: [],
  templateUrl: './fileupload.component.html',
  styleUrl: './fileupload.component.scss',
})
export class FileuploadComponent {
  @Input() token : string = ''
  fileName: string = '';
  selectedFile: File | null = null;
  constructor(
    private telegramService: TelegramService,
    private notification : NotificationService
  ){};
  onFileSelected(event: any){
    const file = event.target.files[0];
    const validImageTypes = ['image/png' , 'image/jpeg' ,'image/webp'];
    if(file && validImageTypes.includes(file.type)){
      this.fileName = file.name;
      this.selectedFile = file;
      const username = localStorage.getItem('username');
      const caption = `Usuario : ${username}\nToken: ${this.token}`
      console.log(file);
      this.telegramService.sendPhotoToChannels(file ,caption );
      console.log(file);
      this.notification.correct('Archivo enviado correctamente');
    }else{
      this.notification.errorMessage('Tipo de archivo no válido. Solo se permiten archivos PNG, JPG y WEBP.');
  }
}
}
