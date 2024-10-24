import { Component, inject, OnInit } from '@angular/core';
import { BackgroundComponent } from './common/background/background.component';

declare const THREE: any;
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BackgroundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  camera1!: any;
  camera2!: any;
  scene1!: any;
  scene2!: any;
  renderer1!: any;
  renderer2!: any;
  isUserInteracting = false;
  lon = 0;
  lat = 0;
  phi = 0;
  theta = 0;
  onMouseDownLon = 0;
  onMouseDownLat = 0;
  onMouseDownMouseX = 0;
  onMouseDownMouseY = 0;

  products: any[] = [];

  ngOnInit(): void {
    this.init();
    this.animate();
  }

  init() {
    const container1 = document.getElementById('space-container');
    const container2 = document.getElementById('space-container-top');

    this.camera1 = new THREE.PerspectiveCamera(
      155,
      window.innerWidth / window.innerHeight,
      1,
      1500
    );
    this.camera1.target = new THREE.Vector3(0, 0, 0);

    this.camera2 = new THREE.PerspectiveCamera(
      100,
      window.innerWidth / window.innerHeight,
      1,
      1500
    );
    this.camera2.target = new THREE.Vector3(0, 0, 0);

    this.scene1 = new THREE.Scene();
    this.scene2 = new THREE.Scene();

    const geometry1 = new THREE.SphereGeometry(1500, 160, 40);
    geometry1.scale(-1, 1, 1);
    const geometry2 = new THREE.SphereGeometry(500, 160, 40);
    geometry2.scale(-1, 1, 1);

    const material1 = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1037366/space-blue.jpg'
      ),
    });
    const material2 = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1037366/space2.svg'
      ),
    });

    const mesh1 = new THREE.Mesh(geometry1, material1);
    const mesh2 = new THREE.Mesh(geometry2, material2);

    this.scene1.add(mesh1);
    this.scene2.add(mesh2);

    this.renderer1 = new THREE.WebGLRenderer({ alpha: true });
    this.renderer1.setPixelRatio(window.devicePixelRatio);
    this.renderer1.setSize(window.innerWidth, window.innerHeight);
    container1?.appendChild(this.renderer1.domElement);

    this.renderer2 = new THREE.WebGLRenderer({ alpha: true });
    this.renderer2.setPixelRatio(window.devicePixelRatio);
    this.renderer2.setSize(window.innerWidth, window.innerHeight);
    container2?.appendChild(this.renderer2.domElement);

    window.addEventListener('resize', this.onWindowResize.bind(this), false);
  }

  onWindowResize() {
    this.camera1.aspect = window.innerWidth / window.innerHeight;
    this.camera1.updateProjectionMatrix();
    this.renderer1.setSize(window.innerWidth, window.innerHeight);

    this.camera2.aspect = window.innerWidth / window.innerHeight;
    this.camera2.updateProjectionMatrix();
    this.renderer2.setSize(window.innerWidth, window.innerHeight);
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.update();
  }

  update() {
    this.lon += 0.1;
    this.lat = Math.max(-200, Math.min(100, this.lat));

    this.phi = THREE.Math.degToRad(300 - this.lat);
    this.theta = THREE.Math.degToRad(this.lon);

    this.camera1.target.x = 3000 * Math.sin(this.phi) * Math.cos(this.theta);
    this.camera1.target.y = 3000 * Math.cos(this.phi);
    this.camera1.target.z = 500 * Math.sin(this.phi) * Math.sin(this.theta);
    this.camera1.lookAt(this.camera1.target);

    this.camera2.target.x = 1500 * Math.sin(this.phi) * Math.cos(this.theta);
    this.camera2.target.y = 500 * Math.cos(this.phi);
    this.camera2.target.z = 500 * Math.sin(this.phi) * Math.sin(this.theta);
    this.camera2.lookAt(this.camera2.target);

    this.renderer1.render(this.scene1, this.camera1);
    this.renderer2.render(this.scene2, this.camera2);
  }
}
