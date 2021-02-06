import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HeroEditComponent } from './heroes-edit.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    { path: ':id', component: HeroEditComponent },
    { path: '', component: HeroEditComponent }

]
@NgModule({
    imports: [
        RouterModule.forChild(routes),
        FlexLayoutModule,
        FormsModule
    ],
    exports: [],
    declarations: [HeroEditComponent],
    providers: [],
})
export class HeroEditModule { }
