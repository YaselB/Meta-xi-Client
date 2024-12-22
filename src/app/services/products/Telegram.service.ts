import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TelegramService {
  private botToken = '7684550352:AAHcGOi4VM6kqqxfxpUpcYpLIxSkquuX1OY';
  chatid = "1425847313";
  private telegramApiUrl = `https://api.telegram.org/bot${this.botToken}`;

  constructor(private http: HttpClient) { }

  sendPhotoToChannel(photo: File, caption: string ): void {
    const formData = new FormData();
    formData.append('chat_id', this.chatid);
    formData.append('photo', photo);
    formData.append('caption', caption);

    this.http.post(`${this.telegramApiUrl}/sendPhoto`, formData).subscribe({
      next: (response) => console.log('Photo sent successfully', response),
      error: (err) => console.error('Error sending photo', err),
    });
  }
  sendMessageToChannel(message: string): void {
    const payload = {
      chat_id : this.chatid,
      text: message,
    }
    this.http.post(`${this.telegramApiUrl}/sendMessage`, payload).subscribe({
      next: (response)=> console.log('Message sent succesfully', response),
      error: (err)=> console.error('Error sending message', err),
    })
  }
}

