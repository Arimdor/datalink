import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Librerias
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Config
import { environment } from '../environments/environment';

// Components
import { AppComponent } from './app.component';
import { TargetListComponent } from './components/targets/targets.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MapComponent } from './components/map/map.component';
import { TargetService } from './services/target.service';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TargetListComponent,
    NavigationComponent,
    MapComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAb9G56azF-SF7hBDi2Q7bTvGKAPkQVpVk'
    })
  ],
  providers: [TargetService, NgbActiveModal],
  entryComponents: [
    FormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
