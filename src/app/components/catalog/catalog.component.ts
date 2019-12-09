import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {RequestsService} from '../../service/requests.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  private routerSubscription: Subscription;
  brandId: number;
  models: Array<any> = [];
  isLoad: boolean;

  constructor(private aroute: ActivatedRoute, private req: RequestsService) {
  }

  ngOnInit() {
    this.isLoad = false;
    this.routerSubscription = this.aroute.queryParams.subscribe(qP => {
      this.brandId = parseInt(qP.brand, 10);
    });
    this.getModels();
  }

  goToModel(id) {
    console.log(id);
  }

  getModels() {
    this.req.getModels(this.brandId).subscribe(res => {
      this.models = res;
      console.log(this.models);
      this.isLoad = true;
    });
  }
  filterApply(val) {
    this.models = val;
  }
}
