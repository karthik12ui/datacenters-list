import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lazy-loader',
  templateUrl: './lazy-loader.component.html',
  styleUrls: ['./lazy-loader.component.scss']
})
export class LazyLoaderComponent implements OnInit {
  @Input() loaderType: number;
  @Input() loaderLength: string;
  @Input() loaderFormat: string;
  loopPlaceholder: any;
  constructor() { }

  ngOnInit() {
    if (this.loopPlaceholder === undefined || this.loopPlaceholder === null) {
      this.loaderLength = '1';
    }
    const numbers = this.getRangeOfNumbers(1, this.loaderLength, 1);
    this.loopPlaceholder = numbers;
    this.loaderFormat = this.loaderFormat;
  }


  getRangeOfNumbers = (start, end, step) => {
    end = Number(end);
    return Array.from(Array.from(Array(Math.ceil((end - start + 1) / step)).keys()),
    numbers => start + numbers * step);
  }

}
