export class PhotoUploadDto {
  BoothCode : string = ''
  Transaction : string = ''
  Images : File[] | null = null;

  constructor(boothCode = '',  Transaction = '' , Images =  []) {
    this.BoothCode = boothCode;
    this.Transaction = Transaction;
    this.Images = Images;
  }
}
