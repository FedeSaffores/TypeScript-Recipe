import { Unit } from "@/Types/types";

export function getUnits(unit:Unit){
    switch(unit){
        case Unit.kg:
            return 'kg';
        case Unit.ml:
            return 'ml'
        case Unit.liters:
            return 'liters'
        case Unit.unit:
            return 'unit';
        default: 
        return 'unit';
    }
}
export function setUnits(value:string):Unit{
    switch(value){
        case 'kg':
            return Unit.kg;
        case 'ml':
            return Unit.ml;
        case 'liters':
            return Unit.liters
        case 'unit':
            return Unit.unit;
        default: 
        return Unit.unit;
    }
}