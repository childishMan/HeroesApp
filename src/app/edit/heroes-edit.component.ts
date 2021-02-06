import { DataService } from './../services/data.service';
import { Hero } from './../model/hero.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'hero-edit',
    templateUrl: './heroes-edit.component.html',
    styleUrls: ['./heroes-edit.component.scss']
})

export class HeroEditComponent implements OnInit {
    id: any;
    hero: Hero = new Hero();

    constructor(private route: ActivatedRoute,
        private dataService: DataService,
        private location: Location) {
    }

    ngOnInit() {
        this.route.params.subscribe(p=>{
            this.id = p.id;
        })

        if (this.id) {
            var data = this.dataService.getElementById(this.id);
        }

        if (data === undefined) {
            this.location.back();
        }
        else {
            this.hero = data;
        }
    }

    back() {
        if (this.hero)
            this.dataService.updateElement(this.hero);

        this.location.back();
    }


}