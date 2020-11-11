basic.forever(function () {
    for (let X = 0; X <= 2; X++) {
        for (let Y = 0; Y <= 2; Y++) {
            if (2 - Y == 2 || 2 + (X - Y) == 2) {
                led.plot(2 + Y, 2 - (X - Y))
                led.plot(2 - Y, 2 + (X - Y))
            }
        }
        basic.pause(100)
    }
})
