import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
    { path: '', component: DashboardComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        FlexLayoutModule,
        CommonModule
    ],
    exports: [],
    declarations: [DashboardComponent],
    providers: [],
})
export class DashboardModule { }
