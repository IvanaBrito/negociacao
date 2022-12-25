import { Imprimivel } from "../utils/imprimivel.js";
import { Comparavel } from "./comparavel.js";

//uma interface pode extender outras
export interface Modelo<T> extends Imprimivel, Comparavel<T>{
    
}