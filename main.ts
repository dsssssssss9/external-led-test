/**
 * Connect resistor between -ve pin of LED & GND
 */
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.showIcon(IconNames.Yes)
})
basic.showIcon(IconNames.Square)
basic.forever(function () {
	
})
