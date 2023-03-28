import { Component } from '@angular/core';
import * as moment from 'moment';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-detail-property',
  templateUrl: './detail-property.component.html',
  styleUrls: ['./detail-property.component.css']
})
export class DetailPropertyComponent {
  date = moment().format('DD MMM YYYY');
  loc = moment().locale('fr').format('LLLL');
  location: any;
  locationJs: any;
  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.getLocation().subscribe((response) => {
      console.log(response);
      this.location = response;
    })

    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      this.locationJs = position.coords;
    })
  }

}
