import { Component, OnInit } from '@angular/core';
import { LayoutSharedService } from 'src/app/layout-shared/services/layout-shared.service';

@Component({
  selector: 'app-initialize',
  templateUrl: './initialize.component.html',
  styleUrls: ['./initialize.component.scss']
})
export class InitializeComponent implements OnInit {

  constructor(public layoutSharedService: LayoutSharedService) {
    this.layoutSharedService.navigateInApp('/dashboard/view-list')
  }

  ngOnInit() {

  }

}
