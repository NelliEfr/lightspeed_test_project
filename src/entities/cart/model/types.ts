import { type Product } from "@/entities/product/model/types";

export interface CartProduct extends Product {
    count: number; 
}