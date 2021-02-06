import { Hero } from './../model/hero.model';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

    data: Hero[] = [];

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getData().subscribe(val => {
            this.data = val.slice(0, 4);
        })
    }
}