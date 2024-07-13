import { Component } from '@angular/core';
import {LandingPageService} from "./landing-page.service";
import {Route, Router} from "@angular/router";
import {v4 as uuidv4} from "uuid";
import {PhotoUploadService} from "../photo-upload/photo-upload.service";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  constructor(private service: LandingPageService, private router: Router) {
    this.service.transaction.next(uuidv4())
  }
  onFileSelected(event: any) {
    const files = event.target.files;
    this.service.listImage.next(files)
    this.router.navigate(['/upload'])
  }
}
