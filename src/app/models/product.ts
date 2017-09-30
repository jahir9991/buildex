export interface Product {

  id:number;
  name:string;
  price:number;
  vat:number;
  image_list:Array<string>;
  rating:number;
  in_cart:boolean;
  supplier_name:string;
}
