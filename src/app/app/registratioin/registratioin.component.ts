import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registratioin',
  templateUrl: './registratioin.component.html',
  styleUrls: ['./registratioin.component.css']
})
export class RegistratioinComponent implements OnInit {
  fileToUpload:any;
  changetext=false;
  imagefile = "../../../assets/image1.png";
  constructor() { }

  ngOnInit(): void {
  }

  imgfile(files:any) {
    this.fileToUpload = files.target.files[0];
    if(files.target.files[0]){
      var reader = new FileReader();
      reader.readAsDataURL(this.fileToUpload);
      reader.onload = (event:any)=>{
        this.imagefile = event.target.result;
      }
    }
   /* console.log();
    console.log(files);
    const reader = new FileReader();
    reader.addEventListener('load',function(){
      return document.querySelector("#photo").setAttribute('src', reader.result);
    })
    reader.readAsDataURL(this.fileToUpload);*/

}
}
