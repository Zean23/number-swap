input.onButtonPressed(Button.A, function () {
    A += 1
    basic.showNumber(A)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.pause(200)
    if (B == B) {
        basic.showNumber(B)
        basic.showNumber(A)
    }
})
input.onButtonPressed(Button.B, function () {
    B += 1
    basic.showNumber(B)
})
let B = 0
let A = 0
basic.showLeds(`
    # . . # .
    # . # . .
    # # . . .
    # . # . .
    # . . # .
    `)
basic.forever(function () {
	
})
