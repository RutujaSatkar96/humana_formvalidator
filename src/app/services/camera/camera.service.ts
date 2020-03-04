import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Injectable({
  providedIn: 'root'
})
export class CameraService {

  private imagPath : any;

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(private camera: Camera) { }

  getPicture() {
    return this.camera.getPicture(this.options);
  }

  setImagePath(imagePath: any){
    this.imagPath = imagePath;
  }

  getImagePath(){
    return this.imagPath;
  }
}
