import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Target } from '../../models/Target';
import { Gtarget } from '../../models/Gtarget';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnChanges {
  @Input() targets: Target[];
  public mTargets: Gtarget[];
  readonly lat = 43.5000000;
  readonly lng = 41.3000000;
  readonly zoom = 7;
  readonly styles = [{
    'featureType': 'landscape',
    'stylers': [{'hue': '#FFBB00'}, {'saturation': 43.400000000000006}, {'lightness': 37.599999999999994}, {'gamma': 1}]
  }, {
    'featureType': 'road.highway',
    'stylers': [{'hue': '#FFC200'}, {'saturation': -61.8}, {'lightness': 45.599999999999994}, {'gamma': 1}]
  }, {
    'featureType': 'road.arterial',
    'stylers': [{'hue': '#FF0300'}, {'saturation': -100}, {'lightness': 51.19999999999999}, {'gamma': 1}]
  }, {
    'featureType': 'road.local',
    'stylers': [{'hue': '#FF0300'}, {'saturation': -100}, {'lightness': 52}, {'gamma': 1}]
  }, {
    'featureType': 'water',
    'stylers': [{'hue': '#0078FF'}, {'saturation': -13.200000000000003}, {'lightness': 2.4000000000000057}, {'gamma': 1}]
  }, {
    'featureType': 'poi',
    'stylers': [{'hue': '#00FF6A'}, {'saturation': -1.0989010989011234}, {'lightness': 11.200000000000017}, {'gamma': 1}]
  }];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.targets.firstChange) {
      this.mTargets = JSON.parse(JSON.stringify(changes.targets.currentValue)).map(function (item) {
        item.gLat = Number.parseFloat(item.lat.substr(0, 2).trim()) + item.lat.substr(3, 2).trim() / 60
          + item.lat.substr(6, 2).trim() / 3600;
        item.gLng = Number.parseFloat(item.lng.substr(0, 2).trim()) + item.lng.substr(3, 2).trim() / 60
          + item.lng.substr(6, 2).trim() / 3600;
        return item;
      });
      console.log(this.mTargets);
    }
  }
}
