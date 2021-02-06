import { Hero } from './../model/hero.model';
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import heroes from '../data/data.json'

@Injectable({
    providedIn: 'root'
})

export class DataService {
    data:Hero[] = [];
    constructor(){
        this.data = heroes;
    }

    getData(): Observable<Hero[]> {
        return of(this.data);
    }

    getElementById(id: any): Hero | undefined {
        return this.data.find(e => e.id === id);
    }

    updateElement(hero:Hero){
        let index = this.data.findIndex(e=>e.id === hero.id);
        if(index != -1){
            this.data[index].name = hero.name;
        }
    }
}