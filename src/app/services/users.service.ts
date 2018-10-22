import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {AbstractControl, NgForm, ValidationErrors} from '@angular/forms';
import * as firebase from 'firebase';
import {FirebaseStorage} from 'angularfire2';
import {map} from 'rxjs-compat/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
    private users: Observable<any[]>;
    private element: { name: any; photoUrl: any; email: ((control: AbstractControl) => (ValidationErrors | null)) | any | boolean | string | null; phoneNumber: any | string; role: any; view: boolean; edit: boolean; id: any };
    private urlBase: any;
    private fileToUpload: any;
    private ref: any;
    private storage: firebase.storage.Storage;
    private fileName: any;
    private refStorage: firebase.storage.Reference;
    private fileAsBlob: Blob;
    private elementToUpdate: { photoUrl: string; name: any; email: ((control: AbstractControl) => (ValidationErrors | null)) | any | boolean | string | null; phoneNumber: any | string; role: any; view: boolean; edit: boolean };
    private fileItem: File;
    

  constructor(private db: AngularFirestore) {
      this.storage = firebase.storage();
      this.users = this.db.collection('users').valueChanges();
  }


    // getImageUrl(id) {
    //     this.ref = this.storage.ref(id);
    //     return this.ref.getDownloadURL().then(function(url)                             {
    //         // Once we have the download URL, we set it to our img element
    //         return url;
    //
    //     }).catch(function(error) {
    //         // If anything goes wrong while getting the download URL, log the error
    //         console.error(error);
    //     });
    // }



  getUsersList() {
      return this.users;
  }



    setUser(form: NgForm, fileToUpload: FileList) {
        let fileItemName;
        this.fileItem = null;
      if (fileToUpload!=null) {
          this.fileItem = fileToUpload.item(0);
          fileItemName = this.fileItem.name;
          console.log("file input has changed. The file is", this.fileItem);
      } else {
          fileItemName = "avatar_yoda.png";
      }
        this.fileName = "avatar_" + fileItemName;
        const refStorage = this.storage.ref(this.fileName);
        const fileAsBlob = new Blob([this.fileItem]);
        refStorage.put(fileAsBlob).then(function(snapshot) {
            console.log('Uploaded a blob or file! => '+JSON.stringify(snapshot));
        })
        .catch(function(error){
            console.error('Error while Upload a blob or file! => '+error);
        });
            // Once we have the download URL, we set it to our img element
            this.element = {
                photoUrl: this.fileName,
                name: form.value.name,
                email: form.value.email,
                phoneNumber: form.value.phoneNumber,
                role: form.value.role,
                view: true,
                edit: false,
                id : form.value.name
            };
            let flag = false;
            let doc = this.element.name;
            if ((this.element.name !== "") && (this.element.name !== undefined)) {
                return this.db.collection("users").doc(doc).set(this.element, { merge: true })
                    .then(function(docRef) {
                        return true;
                    })
                    .catch(function(error) {
                        console.error(error);
                        return false;
                    });
            }
    }


    insertUser(form: NgForm, fileToUpload: FileList) {
      this.setUser(form, fileToUpload);
    }

    deleteUser(id): void {
        this.db.collection('users').doc(id).delete()
            .then(function(docRef) {
                return true;
            });
    }

    updateUser(element,fileToUpload: FileList) {
      this.fileName = null;
        this.fileItem = null;
          if (fileToUpload!=null) {
              this.fileItem = fileToUpload.item(0);
              this.fileName = "avatar_"+this.fileItem.name;
              this.refStorage = this.storage.ref(this.fileName);
              this.fileAsBlob = new Blob([this.fileItem]);
              this.refStorage.put(this.fileAsBlob).then(function(snapshot) {
                  console.log('Uploaded a blob or file! => '+JSON.stringify(snapshot));
              })
              .catch(function(error){
                  console.error('Error while Upload a blob or file! => '+error);
              });
          }
        let flag = false;
        element.view = true;
        element.edit = false;
        if (this.fileName != null) {
            element.photoUrl = this.fileName;
        }
        return this.db.collection("users").doc(element.id).update(element)
            .then(function(docRef) {
                return true;
            })
            .catch(function(error) {
                console.error(error);
                return false;
            });
    }






}
