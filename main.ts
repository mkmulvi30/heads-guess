input.onGesture(Gesture.LogoUp, function () {
    index = randint(0, text_list.length - 1)
    basic.showString("" + (text_list[index]))
})
input.onGesture(Gesture.ScreenUp, function () {
    game.removeLife(1)
})
input.onGesture(Gesture.ScreenDown, function () {
    game.addScore(1)
})
let index = 0
let text_list: string[] = []
game.startCountdown(30000)
text_list = [
"cat",
"dog",
"pig",
"mouse",
"frog",
"rabbit",
"fish",
"teenager",
"Maple Student",
"Mustang",
"herd",
"summer"
]
