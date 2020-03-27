import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScanPage } from './scan.page';
import { CameraService } from '../services/camera/camera.service';
import { Camera } from '@ionic-native/camera';
import { ImageCropperModule } from 'ngx-image-cropper';
import 'web-photo-filter';

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
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ScanPageModule {}
