input.onButtonPressed(Button.A, function () {
    Sprite.move(-1)
})
input.onPinPressed(TouchPin.P2, function () {
	
})
input.onButtonPressed(Button.B, function () {
    Sprite.move(1)
})
input.onPinPressed(TouchPin.P1, function () {
    game.pause()
})
input.onGesture(Gesture.Shake, function () {
	
})
let Sprite: game.LedSprite = null
Sprite = game.createSprite(2, 2)
