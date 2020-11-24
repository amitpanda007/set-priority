import { Component, OnInit } from "@angular/core";


@Component({
    selector: 'card',
    templateUrl: 'card.component.html',
    styleUrls: ['card.component.scss']
})
export class CardComponent implements OnInit {
    private cardName: String;

    constructor() {}

    ngOnInit(): void {
        this.cardName = "Test Card";
    }
}