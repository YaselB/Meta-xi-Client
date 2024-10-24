import { Injectable } from '@angular/core';

const glasses = [
  {
    id: 'vr1',
    name: 'Pimax 5k Plus',
    price: 25000,
    total: 36722.5,
    currency: 'COP',
  },
  {
    id: 'vr2',
    name: 'Gear VR',
    price: 45000,
    total: 69100.5,
    currency: 'COP',
  },
  {
    id: 'vr3',
    name: 'Meta Quest',
    price: 85000,
    total: 124856.5,
    currency: 'COP',
  },
  {
    id: 'vr4',
    name: 'Rift Box',
    price: 125000,
    total: 213853.5,
    currency: 'COP',
  },
  {
    id: 'vr5',
    name: 'Reality Headset',
    price: 185000,
    total: 271746.5,
    currency: 'COP',
  },
  {
    id: 'vr6',
    name: 'HTC Vive',
    price: 258000,
    total: 379966.2,
    currency: 'COP',
  },
  {
    id: 'vr7',
    name: 'Oculus Quest',
    price: 850000,
    total: 1248565,
    currency: 'COP',
  },
  {
    id: 'vr8',
    name: 'Vision Pro',
    price: 5000000,
    total: 11585289,
    currency: 'COP',
  },
];

const myGlasses = [
  {
    id: 'vr1',
    name: 'Pimax 5k Plus',
    price: 25000,
    total: 36722.5,
    currency: 'COP',
  },
  {
    id: 'vr2',
    name: 'Gear VR',
    price: 45000,
    total: 69100.5,
    currency: 'COP',
  },
  {
    id: 'vr3',
    name: 'Meta Quest',
    price: 85000,
    total: 124856.5,
    currency: 'COP',
  },
  {
    id: 'vr4',
    name: 'Rift Box',
    price: 125000,
    total: 213853.5,
    currency: 'COP',
  },
  {
    id: 'vr5',
    name: 'Reality Headset',
    price: 185000,
    total: 271746.5,
    currency: 'COP',
  },
  {
    id: 'vr6',
    name: 'HTC Vive',
    price: 258000,
    total: 379966.2,
    currency: 'COP',
  },
  {
    id: 'vr7',
    name: 'Oculus Quest',
    price: 850000,
    total: 1248565,
    currency: 'COP',
  },
  {
    id: 'vr8',
    name: 'Vision Pro',
    price: 5000000,
    total: 11585289,
    currency: 'COP',
  },
];

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getGlasses(): any {
    return glasses;
  }
  MyGlasses(): any {
    return myGlasses;
  }
}