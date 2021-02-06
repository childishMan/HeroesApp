import { Hero } from './../model/hero.model';
import { DataService } from './../services/data.service';
import { Component } from '@angular/core';

@Component({
    selector: 'heroes-list',
    templateUrl: './heroes.component.html',
    styleUrls:['./heroes.component.scss']
})

export class HeroesComponent{

    data:Hero[] = [];

    constructor(private dataService:DataService) { 
        this.dataService.getData().subscribe((val)=>{
            this.data = val;
        })
    }
}