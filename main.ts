basic.forever(function () {
    for (let X = 0; X <= 2; X++) {
        for (let Y = 0; Y <= 2; Y++) {
            if (X == 2) {
                led.plot(2, 2)
            } else {
                led.plot(1, 2)
                led.plot(0, 2)
                led.plot(3, 2)
                led.plot(4, 2)
            }
            if (Y == 2) {
                led.plot(2, 2)
            } else {
                led.plot(2, 1)
                led.plot(2, 0)
                led.plot(2, 3)
                led.plot(2, 4)
            }
        }
        basic.pause(100)
    }
})
