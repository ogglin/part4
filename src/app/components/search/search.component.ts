import {Component, OnInit} from '@angular/core';
import {RequestsService} from '../../service/requests.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchForm = new FormGroup({
    searchVal: new FormControl('')
  });
  searchResult: [];
  isSearched: boolean;
  isSearchReady: boolean;

  constructor(private req: RequestsService) {
  }

  ngOnInit() {
    this.isSearchReady = false;
    this.isSearched = false;
  }

  handleSearch(limit) {
    this.isSearched = true;
    const body = {
      sval: this.searchForm.value.searchVal,
      limit: limit
    };
    console.log(this.searchForm.value.searchVal.length);
    if (this.searchForm.value.searchVal.length > 2) {
      this.req.search(body).subscribe(res => {
        this.searchResult = res;
        this.isSearched = false;
        this.isSearchReady = true;
        console.log(this.searchResult);
      });
    }
  }

  goToDetail(id) {
    console.log(id);
  }

}
