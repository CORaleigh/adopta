import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShelterFormComponent } from './shelter-form/shelter-form.component';
import { TrailFormComponent } from './trail-form/trail-form.component';
import { ParkFormComponent } from './park-form/park-form.component';

const routes: Routes = [
  {path: 'shelter',
   component: ShelterFormComponent,
   data: {
     title: 'Adopt-A-Shelter', 
     layerId: ''
   }
  },
  {path: 'trail',
   component: TrailFormComponent,
   data: {
     title: 'Adopt-A-Trail', 
     layerId: ''
   }
  },
  {path: 'park',
   component: ParkFormComponent,
   data: {
     title: 'Adopt-A-Park', 
     layerId: ''
   }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
