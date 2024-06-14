let Temperatura = 0
input.onButtonPressed(Button.A, function () {
    Temperatura = input.temperature()
    basic.showString("" + Temperatura + "ºc")
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.lightLevel())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.compassHeading())
})
