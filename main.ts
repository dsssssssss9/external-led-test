/**
 * Connect 1 corner of switch to PIN0
 * 
 * Connect opposite corner of switch to GND
 * 
 * Connect Anode ( long leg ) of LED to PIN16
 * 
 * Connect Cathode ( short Leg ) of LED to 1 leg  of the Resistor
 * 
 * Connect other leg resistor to  GND
 */
input.onPinPressed(TouchPin.P0, function () {
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.showIcon(IconNames.Yes)
})
input.onPinReleased(TouchPin.P0, function () {
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.showIcon(IconNames.No)
})
pins.digitalWritePin(DigitalPin.P16, 0)
basic.showIcon(IconNames.Triangle)
