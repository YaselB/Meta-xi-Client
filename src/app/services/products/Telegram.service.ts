import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class TelegramService {
  private botToken = '7684550352:AAHcGOi4VM6kqqxfxpUpcYpLIxSkquuX1OY';
  private chatIds = ['1425847313', '6379656679']; // IDs de los destinatarios
  private telegramApiUrl = `https://api.telegram.org/bot${this.botToken}`;

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService
  ) {}

  sendPhotoToChannels(photo: File, caption: string): void {
    const formData = new FormData();
    formData.append('photo', photo);
    formData.append('caption', caption);

    this.chatIds.forEach((chatId) => {
      formData.set('chat_id', chatId); // Actualiza el chat_id para cada destinatario

      this.http.post(`${this.telegramApiUrl}/sendPhoto`, formData).subscribe({
        next: (response) =>
          console.log(`Photo sent successfully to chat ID: ${chatId}`, response),
        error: (err) =>
          console.error(`Error sending photo to chat ID: ${chatId}`, err),
      });
    });
  }

  sendMessageToChannels(message: string): void {
    const payload = {
      text: message,
    };

    this.chatIds.forEach((chatId) => {
       // Agrega el chat_id para cada destinatario

      this.http.post(`${this.telegramApiUrl}/sendMessage`, chatId).subscribe({
        next: (response) => {
          console.log(`Message sent successfully to chat ID: ${chatId}`, response);
          this.notificationService.correct(
            `Mensaje enviado correctamente a chat ID: ${chatId}`
          );
        },
        error: (err) => {
          console.error(`Error sending message to chat ID: ${chatId}`, err);
          this.notificationService.errorMessage(
            `Error al enviar el mensaje a chat ID: ${chatId}. Inténtalo nuevamente.`
          );
        },
      });
    });
  }
}
