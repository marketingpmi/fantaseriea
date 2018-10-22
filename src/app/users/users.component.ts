import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {ClassificationService} from '../services/classification.service';
import {UsersService} from '../services/users.service';
import {NgForm} from '@angular/forms';
import * as firebase from 'firebase';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    private view: boolean;
    private edit: boolean;
    private elementSel: any;
    users: Observable<any[]>;
    currentUser: any;
    private fileToUpload: File;
    private fileName: string;
    private roles: ({ role: string })[];
    private storage: firebase.storage.Storage;
    private fileList: FileList;
    private ref: any;

    constructor(private af: AuthService, private uss: UsersService) {
        this.currentUser = {};
        this.currentUser.role = 'admin';
        // Get a reference to the storage service, which is used to create references in your storage bucket
        this.storage = firebase.storage();
    }

    ngOnInit() {
        this.view = true;
        this.edit = false;

        this.users = this.uss.getUsersList();

        this.roles = [
            {role: 'user'},
            {role: 'admin'}
        ];
    }

    editItem(element) {
        this.elementSel = element;
        element.view = false;
        element.edit = true;
        this.view = false;
        this.edit = true;
    }

    changeAvatar() {
        let changeinput: HTMLElement = document.getElementById("photoUrlChange") as HTMLElement;
        changeinput.click();
    }

    getElement() {
        return this.elementSel;
    }

    viewMode(element) {
        this.users = this.uss.getUsersList();

        this.elementSel = element;
        element.view = true;
        element.edit = false;
        this.view = true;
        this.edit = false;


    }

    insertUser(form: NgForm) {
        console.dir(form);
        /* SAVE ELEMENT */
        const flag = this.uss.insertUser(form, this.fileList);
        if (!flag) {
            alert ("Attenzione! Problemi nell'inserimento. ");
            this.fileList = null;
        } else {
            alert ("Inserimento avvenuto correttamente");
            this.fileList = null;
        }
    }

    handleFileInput(files: FileList) {
        this.fileList = files;
        let fileItem = files.item(0);
        console.log("file input has changed. The file is", fileItem);
        this.fileName = fileItem.name;
        this.fileToUpload = fileItem;
    }

    saveItem(element) {
        element.edit = false;
        element.view = true;
        /* SAVE ELEMENT */
        let flag = this.uss.updateUser(element,this.fileList);
        if (!flag) {
            alert ("Attenzione! Problemi nella modifica. ");
        } else {
            alert ("Modifica avvenuta correttamente");
        }
        /* SHOW ELEMENT UPDATED */
        this.viewMode(element);
    }


    deleteItem(element) {
        /* SAVE ELEMENT */
        this.uss.deleteUser(element.id);
    }


}
