import { Component, OnInit, Input } from '@angular/core';
import { LocationService } from '../shared/services/location.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() latitude: Number
  @Input() longitude: Number
  locationInfo: any;

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.getLocationInfo();
  }

  getLocationInfo() {
    this.locationService.getLocationInfo(this.latitude, this.longitude).subscribe((response: any) => {
      this.locationInfo = response;
    })
  }
}
