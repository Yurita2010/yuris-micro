input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(0, 6))
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
