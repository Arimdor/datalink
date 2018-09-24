import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Target } from '../models/Target';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TargetService {

  targetCollection: AngularFirestoreCollection<Target>;
  targets: Observable<Target[]>;
  targetDoc: AngularFirestoreDocument<Target>;

  constructor(private db: AngularFirestore) {
    // this.targets = this.db.collection('targets').valueChanges();
    this.targetCollection = this.db.collection('targets');
    this.targets = this.targetCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Target;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getTargets() {
    return this.targets;
  }

  addTarget(target) {
    return this.targetCollection.add(target);
  }

  deleteTarget(id) {
    this.db.doc(`targets/${id}`).delete();
  }

}
