import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PhotoUploadDto} from "./DTO/photo-upload.dto";
import {enviroment} from "../../../enviroment/enviroment";

@Injectable({
  providedIn: 'root'
})
export class PhotoUploadService {
  constructor(private http: HttpClient) {
  }

  uploadImage(params: PhotoUploadDto) {
    const {Images,Transaction,BoothCode} = params
    const formData = new FormData();
    formData.append('boothCode', BoothCode);
    formData.append('transaction', Transaction);
    Images?.forEach(file => {
      formData.append('images', file, file.name)
    })
      return this.http.post(`${enviroment.apiUrl}/general/printing` , formData)
  }

}
