import { Pipe, PipeTransform } from '@angular/core';
import * as firebase from 'firebase';

@Pipe({
  name: 'convertPhotoUrl'
})
export class ConvertPhotoUrlPipe implements PipeTransform {
    private storage: firebase.storage.Storage;
    private ref: firebase.storage.Reference;

    constructor() {
        this.storage = firebase.storage();
        this.ref = this.storage.ref();
    }

    transform(value: any): any {
        console.log("valore originale => "+value);
        return firebase.storage().ref(value).getDownloadURL().then((newValue) => {
          console.log("valore nuovo => "+ newValue);
          return newValue;
        });
    }

}
