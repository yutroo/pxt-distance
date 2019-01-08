enum DistanceEvent {
    //% block="すごく近い"
    IsDistance = 1,
    //% block="近い"
    IsDistance2 = 2,
    //% block="少し近い"
    IsDistance3 = 3,
    //% block="少し遠い"
    IsDistance4 = 4,
    //% block="遠い"
    IsDistance5 = 5,
    //% block="すごく遠い"
    IsDistance6 = 6,
}
    
//% weight=70 icon="\uf0e7" color=#d2691e block="電気の利用2"
namespace gp {
    //% blockId=turn_on block="スイッチON"
    export function turnON(): void {
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
    //% blockId=turn_off block="スイッチOFF"
    export function turnOFF(): void {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    //% blockId=is_distance block="すごく近い"
    export function isDistance(): boolean {
        if (grove.measureInCentimeters(DigitalPin.P0) < 20) {
            return true;
        } else {
            return false;
        }
    }
    //% blockId=is_distance2 block="近い"
    export function isDistance(): boolean {
        if (grove.measureInCentimeters(DigitalPin.P0) < 40) {
            return true;
        } else {
            return false;
        }
    }
    //% blockId=is_distance3 block="少し近い"
    export function isDistance(): boolean {
        if (grove.measureInCentimeters(DigitalPin.P0) < 60) {
            return true;
        } else {
            return false;
        }
    }
    //% blockId=is_distance4 block="少し遠い"
    export function isDistance(): boolean {
        if (grove.measureInCentimeters(DigitalPin.P0) < 80) {
            return true;
        } else {
            return false;
        }
    }
    //% blockId=is_distance5 block="遠い"
    export function isDistance(): boolean {
        if (grove.measureInCentimeters(DigitalPin.P0) < 100) {
            return true;
        } else {
            return false;
        }
    }
    //% blockId=is_distance6 block="すごく遠い"
    export function isDistance(): boolean {
        if (grove.measureInCentimeters(DigitalPin.P0) > 100) {
            return true;
        } else {
            return false;
        }
    }
