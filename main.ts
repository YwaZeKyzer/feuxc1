let t = 0
let strip: neopixel.Strip = null
let etat = 0
function countdown () {
    while (t > 0) {
        basic.showNumber(t)
        t += -1
        basic.pause(200)
    }
    basic.clearScreen()
    strip.clear()
    strip.show()
    feuV()
}
function feuV () {
    etat = 0
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    strip.show()
    basic.pause(10000)
    strip.clear()
    strip.show()
}
function feuR () {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    if (etat == 1) {
        countdown()
    }
}
function FeuO () {
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Orange))
    strip.show()
    basic.pause(2000)
    strip.clear()
    strip.show()
}
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
    strip.setBrightness(32)
    t = 10
    etat = 1
    feuR()
})
