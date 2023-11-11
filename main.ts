pins.onPulsed(DigitalPin.P13, PulseValue.High, function () {
    basic.showString("C-DOWN")
})
input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    basic.pause(1000)
    basic.clearScreen()
})
pins.onPulsed(DigitalPin.P16, PulseValue.High, function () {
    basic.showString("F-LEFT")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    pins.digitalWritePin(DigitalPin.P12, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P12, 0)
})
pins.onPulsed(DigitalPin.P15, PulseValue.High, function () {
    basic.showString("E-UP")
})
pins.onPulsed(DigitalPin.P8, PulseValue.High, function () {
    basic.showString("Z")
})
pins.onPulsed(DigitalPin.P14, PulseValue.High, function () {
    basic.showString("D-RIGHT")
})
pins.setPull(DigitalPin.P15, PinPullMode.PullNone)
pins.setPull(DigitalPin.P14, PinPullMode.PullNone)
pins.setPull(DigitalPin.P13, PinPullMode.PullNone)
pins.setPull(DigitalPin.P16, PinPullMode.PullNone)
pins.setPull(DigitalPin.P16, PinPullMode.PullNone)
pins.setPull(DigitalPin.P8, PinPullMode.PullNone)
pins.analogSetPitchPin(AnalogPin.P0)
pins.setAudioPin(AnalogPin.P0)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) > 768) {
        basic.showArrow(ArrowNames.East)
    }
    if (pins.analogReadPin(AnalogPin.P1) < 256) {
        basic.showArrow(ArrowNames.West)
    }
    if (pins.analogReadPin(AnalogPin.P2) > 768) {
        basic.showArrow(ArrowNames.North)
    }
    if (pins.analogReadPin(AnalogPin.P2) < 256) {
        basic.showArrow(ArrowNames.South)
    }
})
