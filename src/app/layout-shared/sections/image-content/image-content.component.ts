import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-content',
  templateUrl: './image-content.component.html',
  styleUrls: ['./image-content.component.scss']
})
export class ImageContentComponent implements OnInit {
  @Input() sectionTitle: string;
  @Input() content: string;
  @Input() imageUrl: string;
  @Input() imagePostion: string;
  @Input() bgColor: string;
  @Input() textColor: string;
  constructor() { }

  ngOnInit() {
  }

}
