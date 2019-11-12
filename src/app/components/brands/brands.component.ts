import {Component, OnInit} from '@angular/core';
import {RequestsService} from '../../service/requests.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  Brands;
  loading = true;
  error: any;
  isBrandsOpen = false;

  constructor(private req: RequestsService, private router: Router) {
  }

  ngOnInit() {
    this.req.getBrands().subscribe(
      result => {
        this.Brands = result;
      }
    );
  }

  openBrands() {
    this.isBrandsOpen = this.isBrandsOpen !== true;
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 100);
  }

  gotoBrand(e) {
    this.router.navigate(['catalog'], { queryParams: {brand: e}});
  }

}
