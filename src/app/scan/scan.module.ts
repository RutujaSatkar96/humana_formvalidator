import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScanPage } from './scan.page';
import { CameraService } from '../services/camera/camera.service';
import { Camera } from '@ionic-native/camera';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ImageCropperModule,
    RouterModule.forChild([{ path: '', component: ScanPage }])  ],
  declarations: [ScanPage],
  providers: [
    CameraService
  ]
})
export class ScanPageModule {}
