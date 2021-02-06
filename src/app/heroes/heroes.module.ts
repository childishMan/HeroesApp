import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HeroesComponent } from './heroes.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    { path: '', component: HeroesComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule, FlexLayoutModule
    ],
    exports: [],
    declarations: [HeroesComponent],
    providers: [],
})
export class HerosModule { }
