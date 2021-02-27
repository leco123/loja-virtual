import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export class Api<T> {

    constructor(
        public firestore: AngularFirestore,
        public path: string
    ) {}

    public inserir(collection: string, obj: T): Promise<DocumentReference<T>> {
      return this.firestore.collection<T>(collection).add(obj);
    }

    public getAll(collection: string): Observable<DocumentChangeAction<T>[]> {
      return this.firestore.collection<T>('collection').snapshotChanges();
    }

    public update(collection: string, obj: T, id: string): void {
        //delete id;
        this.firestore.doc(`${collection}/` + id).update(obj);
    }

    public delete(obj: T, collection: string): void {
      this.firestore.doc(`${collection}/` + obj).delete();
    }
}
