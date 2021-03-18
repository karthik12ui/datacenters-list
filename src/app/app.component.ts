import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { InitialAppSpinnerService } from '../@rayonsoft-shared/services/initial-app-spinner.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private unsubscribeAll: Subject<any>;
  public settings: any;

  constructor(private initialAppSpinnerService: InitialAppSpinnerService) {
                //  this.settings = AppConstants;
                  const captureUrl = window.location.href;
  }

  ngOnInit() {
      const HttpLoader = document.getElementById('httpLoader');
      HttpLoader.style.display  = 'none';
      console.log('HttpLoader');
  }

  ngOnDestroy(): void {
      this.unsubscribeAll.next();
      this.unsubscribeAll.complete();
  }
}
