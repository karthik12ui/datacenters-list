import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-svg-grid-style',
  templateUrl: './svg-grid-style.component.html',
  styleUrls: ['./svg-grid-style.component.scss']
})
export class SvgGridStyleComponent implements OnInit {
  @Input() gridStrokeColor: string;
  @Input() pathPosition: string;
  enableLeft: boolean;
  enableRight: boolean;
  constructor() { }

  ngOnInit() {
    if(this.gridStrokeColor === undefined ||
      this.gridStrokeColor === null || this.gridStrokeColor === '') {
      this.gridStrokeColor = '#AAAAAA'
    }

    if(this.pathPosition === undefined ||
      this.pathPosition === null || this.pathPosition === '') {
        this.enableRight = true;
      } else {
        switch (this.pathPosition) {
          case 'left':
            this.enableLeft = true;
          break;
          case 'right':
            this.enableRight = true;
          break;
          case 'both':
            this.enableRight = true;
            this.enableLeft = true;
            break;
          default:
            this.enableRight = true;
          break;
        }
      }
  }
}
