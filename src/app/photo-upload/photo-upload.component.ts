import {AfterViewInit, Component, OnInit} from '@angular/core';
import {LandingPageService} from "../landing-page/landing-page.service";
import {Router} from "@angular/router";
import {PhotoUploadService} from "./photo-upload.service";
import {PhotoUploadDto} from "./DTO/photo-upload.dto";
@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrl: './photo-upload.component.scss'
})
export class PhotoUploadComponent implements OnInit , AfterViewInit{

  constructor(private landingService: LandingPageService , private router: Router  , private service: PhotoUploadService) {
  }

  ngAfterViewInit(): void {

    }
  files = []
  photos: any = []
  priceUnit = 20000
  ngOnInit(): void {
    if(!this.landingService.transaction.value) {
      this.router.navigate([''])
    }

    if(this.landingService.listImage.value) {
      this.files = [...this.landingService.listImage.value ]
    }
        this.onFileSelected()

    }



  onFileSelected(moreImage= []) {
    this.files = [...this.files ,...moreImage]
    this.photos = [];
    for (let i = 0; i < this.files.length; i++) {
      const file = this.files[i];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const img = new Image();
        img.src = e.target.result;
        img.onload = () => {
          let {width, height} = img;
          if(width / height  < 1.2 && width/height > 0.9) {
              height = width  = 156.69
          }
          const obj = {src: img.src, width, height}
          // @ts-ignore
          this.photos.push(obj);
        };
      };
      reader.readAsDataURL(file);
    }
  }

  deleteImage(index = 0) {
      this.photos.splice(index , 1)
      this.files.splice(index , 1)
      if(this.photos.length == 0) {
        this.router.navigate( [''])

      }
  }

  uploadImage() {
    const photoUploadParams : PhotoUploadDto = {
      Images : this.files,
      Transaction: this.landingService.transaction.value,
      BoothCode: 'TEST02'
    }
    this.service.uploadImage(photoUploadParams).subscribe(value =>  {
      this.router.navigate( ['payment'])
    })
  }

  removeAll() {
    this.photos  = []
    this.router.navigate( [''])
  }

  addMoreImage(event: any) {
    const files = event.target.files;
    this.onFileSelected(files)
  }


}
// https://ctxt.io/2/AACYLDxuFg
