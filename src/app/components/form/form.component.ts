import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Target } from '../../models/Target';
import { TargetService } from '../../services/target.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Input() title;

  public target: Target = {
    type: 'type',
    lat: '',
    lng: '',
    status: 'status'
  };

  public coord = {
    lat_degrees: '00',
    lat_minutes: '00',
    lat_seconds: '00',
    lng_degrees: '00',
    lng_minutes: '00',
    lng_seconds: '00'
  };

  constructor(public activeModal: NgbActiveModal, private targetSevice: TargetService) {
  }

  onSubmit() {
    this.target.lat = `${this.coord.lat_degrees}°${this.coord.lat_minutes}'${this.coord.lat_seconds}"`.trim();
    this.target.lng = `${this.coord.lng_degrees}°${this.coord.lng_minutes}'${this.coord.lng_seconds}"`.trim();

    if (this.target.type !== 'type' && this.target.type !== 'status' && this.target.lat !== '' && this.target.lng !== '') {
      this.targetSevice.addTarget(this.target).then((target) => {
        console.log(this.target.lat, this.target.lng);
        this.target.type = 'type';
        this.target.lat = null;
        this.target.lng = null;
        this.target.status = 'status';
      }).catch(reason => {
        console.log(reason);
      });
    } else {
      console.log(this.target.lat, this.target.lng);
    }
  }

}
