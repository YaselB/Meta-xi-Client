import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TelegramService {
  private botToken = '7684550352:AAHcGOi4VM6kqqxfxpUpcYpLIxSkquuX1OY';
  chatid = "1425847313";
  private telegramApiUrl = `https://api.telegram.org/bot${this.botToken}/sendPhoto`;

  constructor(private http: HttpClient) { }

  sendPhotoToChannel(photo: File, caption: string ): void {
    const formData = new FormData();
    formData.append('chat_id', this.chatid);
    formData.append('photo', photo);
    formData.append('caption', caption);

    this.http.post(this.telegramApiUrl, formData).subscribe({
      next: (response) => console.log('Photo sent successfully', response),
      error: (err) => console.error('Error sending photo', err),
    });
  }
}

