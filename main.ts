let Mahé = 0
input.onButtonPressed(Button.A, function () {
    Mahé = randint(0, 2)
    if (Mahé == 0) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
    } else if (Mahé == 2) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . . . #
            . . . . .
            `)
    } else if (Mahé == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # . #
            # . . . .
            . . . . .
            `)
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
basic.forever(function () {
	
})
