import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";
import { Order } from "./order.model";

@Injectable()
export class StaticDataSource {
    private products: Product[] = [
        new Product(1, "Kayak", "Watersports", "A boat for one person ➖ (Watersports)", 275),
        new Product(2, "Lifejacket", "Watersports", "Protective and fashionable ➖ (Watersports)", 48.95),
        new Product(3, "Fan T-Shirt", "Watersports", "Fan T-Shirt ➖ (Watersports)", 19.50),
        new Product(4, "Soccer Ball", "Soccer", "FIFA-approved size and weight ➖ (Soccer)", 34.95),
        new Product(5, "Corner Flags", "Soccer", "Give your playing field a professional touch ➖ (Soccer)", 21.95),
        new Product(6, "Stadium", "Soccer", "Flat-packed 35,000-seat stadium ➖ (Soccer)", 79500),
        new Product(7, "Thinking Cap", "Soccer", "Improve brain efficiency by 75% ➖ (Chess)", 11.95),
        new Product(8, "Unsteady Chair", "Chess", "Secretly give your opponent a disadvantage ➖ (Chess)", 29.95),
        new Product(9, "Human Chess Board", "Chess", "A fun game for the family ➖ (Chess)", 100)
    ];

    getProducts(): Observable<Product[]> {
        return Observable.from([this.products]);
    }

    saveOrder(order: Order): Observable<Order> {
        return Observable.from([order]);
    }    
}
