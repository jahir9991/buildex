import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {NgxCarousel} from 'ngx-carousel';
import {Animate, Custom} from "ngx-carousel/src/ngx-carousel/ngx-carousel.interface";


import {Product} from "../../models/product";


@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {

    @Input() products: Array<Product>;
    @Input() productType: string;

    public carouselTile: Carousel;

    constructor() {
    }

    ngOnInit() {
        this.products = [];
        this.carouselTile = <Carousel>{
            grid: {xs: 2, sm: 3, md: 4, lg: 4, all: 0},
            slide: 4,
            speed: 400,
            animation: 'lazy',
            point: false,
            loop:true,
            load: 4,
            touch: false,
            custom: 'tile',
            dynamicLength: true
        }
    }


    public carouselLoad(evt: any) {


        // const len = this.carouselTileItems.length
        //     if (len <= 30) {
        //       for (let i = len; i < len + 10; i++) {
        //         this.carouselTileItems.push(i);
        //       }
        //     }

    }

}
class Carousel {
    grid: Grid;
    slide?: number;
    speed?: number;
    interval?: number;
    animation?: Animate;
    point?: boolean;
    type?: string;
    load?: number;
    custom?: Custom;
    loop?: boolean;
    easing: string;
    touch?: boolean;
    dynamicLength: boolean;
}
export class Grid {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    all: number;
}
export type Custom = 'banner';
export type Animate = 'lazy';
