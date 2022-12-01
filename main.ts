let list2: number[] = []
let list = []
basic.forever(function () {
    list = [
    0,
    1,
    0,
    0,
    0
    ]
    list2 = [
    10,
    50,
    100,
    150,
    255
    ]
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            if (list[y][x] == 1) {
                led.plotBrightness(x, y, 255)
            } else {
                led.unplot(x, y)
            }
        }
    }
})
