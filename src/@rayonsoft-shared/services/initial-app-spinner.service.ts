import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { animate, AnimationBuilder, AnimationPlayer, style } from '@angular/animations';
import { NavigationEnd, Router } from '@angular/router';

import { filter, take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class InitialAppSpinnerService {
    initialAppSpinner: any;
    player: AnimationPlayer;

    constructor(
        private animationBuilder: AnimationBuilder,
        @Inject(DOCUMENT) private document: any,
        private router: Router
    ) {
        // Initialize
        this.init();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------
    private init(): void {
        // Get the splash screen element
        this.initialAppSpinner = this.document.body.querySelector('#initial-app-spinner');
        if (this.initialAppSpinner) {
          const hideOnLoad = this.router.events.subscribe((event) => {
              if (event instanceof NavigationEnd) {
                  setTimeout(() => {
                      this.hide();
                      hideOnLoad.unsubscribe();
                  }, 0);
              }
          });
        }
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    show(): void {
        this.player =
            this.animationBuilder
                .build([
                    style({
                        opacity: '0',
                        zIndex : '99999'
                    }),
                    animate('400ms ease', style({opacity: '1'}))
                ]).create(this.initialAppSpinner);

        setTimeout(() => {
            this.player.play();
        }, 0);
    }
    hide(): void {
        this.player =
            this.animationBuilder
                .build([
                    style({opacity: '1'}),
                    animate('400ms ease', style({
                        opacity: '0',
                        zIndex : '-10'
                    }))
                ]).create(this.initialAppSpinner);

        setTimeout(() => {
            this.player.play();
        }, 0);
    }
}
