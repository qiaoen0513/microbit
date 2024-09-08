input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(3000)
    pins.digitalWritePin(DigitalPin.P2, 0)
})
let graph_moisture = 0
let moisture = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.pause(2000)
basic.clearScreen()
basic.forever(function () {
    moisture = pins.analogReadPin(AnalogPin.P0)
    if (moisture) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    graph_moisture = Math.map(moisture, 750, 250, 0, 25)
    led.plotBarGraph(
    graph_moisture,
    25
    )
    basic.pause(5000)
})
