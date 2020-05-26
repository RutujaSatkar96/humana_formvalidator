import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { SmartScanForm } from '../../models/SmartScanForm'
import { Platform } from '@ionic/angular';
import { ValidationResultItem } from 'src/app/models/ValidationResults';
import { ToastController } from '@ionic/angular';
import { getLocaleDateFormat } from '@angular/common';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  constructor(private http: HTTP, private platform: Platform, private toastController: ToastController, private httpService: HttpClient) { }

  private _url: string = "assets/humana.json";

  

  validateForm(smartScanForm: SmartScanForm) {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/"
    const url = 'http://35.239.227.197:8080/api/form';
    let formData:FormData = new FormData();
    // let headers: HttpHeaders = new HttpHeaders();
    // headers = headers.append('Authorization','Token 43b7f25f3438a121ac72f4e0888ba53df4da7a55');

    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     'Authorization': 'Token 43b7f25f3438a121ac72f4e0888ba53df4da7a55'
    //   })
    // }


    //const authToken = 'Token 43b7f25f3438a121ac72f4e0888ba53df4da7a55';


    var headers = new HttpHeaders();
    headers.append("Authorization", 'Token 43b7f25f3438a121ac72f4e0888ba53df4da7a55');
    formData.append('file', this.B64toBlob(smartScanForm.FormPages[0].imageData), 'file.name' + Math.random() + '.jpg');

    //alert('in service'+ smartScanForm.FormPages[0].imageData);
    if (false && this.platform.is('cordova')) {
      return new Promise((resolve, reject) => {
        // this.http.sendRequest(url,{ method: "post", data: formData, headers: { Authorization: 'Token 43b7f25f3438a121ac72f4e0888ba53df4da7a55'},  timeout: 5000})
        
        // .then(value => {
        //   console.log('url'+ url);

        //   console.log(value.data);
        //   resolve(this.extractValidationResult(value.data));
          
        // }).catch(error => {
        //   this.handleError(error);

        //   reject(error);
        // });
        this.httpService.post(url,formData)
        .subscribe(value => {
          console.log(value);
          resolve(this.extractValidationResult(value));}
          ,
          err => 
            console.log(err)
        );
      });
    } else {
      return new Promise((resolve, reject) => {
        fetch(url, {
            body: formData,
            method: 'POST',
            headers: {'Authorization': 'Token 43b7f25f3438a121ac72f4e0888ba53df4da7a55'}
        })
        .then(response => {
            return response.json()
        })
        .then(success => {
            return resolve(this.extractValidationResult(success));
        })
        .catch(error => {
            this.handleError(error);

            return reject(error);
        });
      });

      
      //Mock Data
      // setTimeout(() => {
      //   console.log('Mock Data');
        
      //   const mockResponse = [{
      //     key: 'First Name', value: "filled"
      //     }, {
      //       key: 'Last Name', value: "filled"
      //     }, {
      //       key: 'SSN', value: "missing"
      //   }];

      //   resolve(mockResponse)
      // }, 5000);
    }
  }

  getData(){
    return this.httpService.get(this._url);
  }

  private B64toBlob(dataURI) {
    var byteString = atob(dataURI.split(',')[1]);
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);

    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: 'image/jpeg' });
  }

   extractValidationResult(data) {
    let validationResults: ValidationResultItem[] = new Array();
    console.log('in dtaa'+JSON.stringify(data));
    const response = data.response[0].file_response;
    const keys = Object.keys(response);

    (async () => {
      const toast = await this.toastController.create({
        message: 'Service Call Successful: ' + JSON.stringify(response),
        duration: 10000,
        showCloseButton: true
      });
      toast.present();
    })();

    keys.forEach(key => {
      const validationResultItem: ValidationResultItem = {
        key: key,
        value: response[key]
      };

      validationResults.push(validationResultItem);
    });

    return validationResults;
  }

  private handleError(error) {
    (async () => {
      const toast = await this.toastController.create({
        message: 'Service Call Failed : ' + error,
        duration: 10000,
        showCloseButton: true
      });
      toast.present();
    })();
  }
}
