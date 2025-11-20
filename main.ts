/**
 * Connect resistor between -ve pin of LED & GND
 */
input.onPinPressed(TouchPin.P0, function () {
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.showIcon(IconNames.Yes)
})
input.onPinReleased(TouchPin.P0, function () {
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
pins.digitalWritePin(DigitalPin.P16, 0)
basic.showIcon(IconNames.Triangle)
basic.forever(function () {
	
})
