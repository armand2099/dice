let dado = 0
input.onGesture(Gesture.Shake, function () {
    for (let index = 1; index < 30; index++) {
        basic.showNumber(randint(1, 6), index * 1)
    }
basic.pause(1000)
    dado = randint(1, 6)
    basic.showNumber(dado)
    basic.clearScreen()
    basic.pause(1000)
    basic.showNumber(dado)
    basic.clearScreen()
    basic.pause(1000)
    basic.showNumber(dado)
})
basic.forever(function () {
	
})
