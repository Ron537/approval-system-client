import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  @Output() onSearch: EventEmitter<string>;

  searchTerm: string;

  constructor() {
    this.onSearch = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  search(term: string) {
    this.onSearch.emit(term);
  }
}
