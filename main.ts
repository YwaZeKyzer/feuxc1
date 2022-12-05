let strip: neopixel.Strip = null
let etat = 0
function feuV () {
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    strip.show()
    basic.pause(10000)
    strip.clear()
    strip.show()
}
function sousprogramme () {
    if (etat == 0) {
        feuV()
        strip.clear()
        strip.show()
        etat = 1
    } else if (etat == 1) {
        FeuO()
        strip.clear()
        strip.show()
        etat = 2
    } else {
        feuR()
        strip.clear()
        strip.show()
        etat = 0
    }
}
function feuR () {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(12000)
    strip.clear()
    strip.show()
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
    sousprogramme()
})
