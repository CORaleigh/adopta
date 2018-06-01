import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { Router, ActivatedRoute, ParamMap, NavigationEnd, ActivationEnd } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  // Set our map properties
  mapCenter = [-122.4194, 37.7749];
  basemapType = 'satellite';
  mapZoomLevel = 12;
  title = "";
  navigationSubscription;
  constructor(  private route: ActivatedRoute,
    private router: Router) {


    
  }
  @ViewChild('sideNav') private sideNav: MatSidenav;
  
  @ViewChild('sideNavContent') private sideNavContent: MatSidenavContent;  
  onResize(event) {
    
    if (this.sideNav.opened) {

      this.sideNavContent._container._contentMargins.left = this.sideNav._width;
    }
  }
  // See app.component.html
  mapLoadedEvent(status: boolean) {
    console.log('The map loaded: ' + status);
  }

  loaded(data:any) {
    this.title = data.title;
  }
  ngOnInit() {

    this.navigationSubscription = this.router.events.subscribe((e:any) => {
      if (e instanceof ActivationEnd) {
        this.loaded(e.snapshot.data);
      }
    })
  }
  ngOnDestroy() {
    // avoid memory leaks here by cleaning up after ourselves. If we  
    // don't then we will continue to run our initialiseInvites()   
    // method on every navigationEnd event.
    if (this.navigationSubscription) {  
       this.navigationSubscription.unsubscribe();
    }
  }  
}
