import { Component } from '@angular/core';

@Component({
  selector: 'app-fileupload',
  standalone: true,
  imports: [],
  templateUrl: './fileupload.component.html',
  styleUrl: './fileupload.component.scss',
})
export class FileuploadComponent {
  fileName: string = '';

  ok() {
    console.log('ok');
    alert('ok');
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const validImageTypes = ['image/png', 'image/jpeg', 'image/webp'];

    if (file && validImageTypes.includes(file.type)) {
      this.fileName = file.name;
    } else {
      console.error(
        'Tipo de archivo no válido. Solo se permiten PNG, JPG y WEBP.'
      );
    }
  }
}
