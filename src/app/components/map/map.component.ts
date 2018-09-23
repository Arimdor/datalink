import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Target } from '../../models/target';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnChanges {
  @Input() targets: Target[];
  public mTargets: Target[];

  readonly lat = 43.5000000;
  readonly lng = 41.3000000;
  readonly zoom = 7;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.targets.firstChange) {
      this.mTargets = JSON.parse(JSON.stringify(changes.targets.currentValue)).map(function (item) {
        item.lat = Number.parseFloat(item.lat.substr(0, 2).trim()) + item.lat.substr(3, 2).trim() / 60
          + item.lat.substr(6, 2).trim() / 3600;
        item.lng = Number.parseFloat(item.lng.substr(0, 2).trim()) + item.lng.substr(3, 2).trim() / 60
          + item.lng.substr(6, 2).trim() / 3600;
        return item;
      });
      console.log(this.mTargets);
    }
  }
}
