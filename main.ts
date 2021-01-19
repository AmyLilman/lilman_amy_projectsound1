// while True:
//     print("Sound level: " + input.sound_level())
//     if input.sound_level() > 150:
//         light.show_animation(light.rainbowAnimation, 500)
//     else:
//         light.clear()
// while True:
//     if input.light_level() > 8:
//         music.ba_ding.play_until_done()
music.playMelody("C C G G A A G F F E E D D C G G F F E E D G G F F E E D C C G G A A G F F E E D D C ", 150)
music.setVolume(20)
while (true) {
    if (music.playMelody("C C G G A A G F F E E D D C G G F F E E D G G F F E E D C C G G A A G F F E E D D C ", 150)) {
        light.showAnimation(light.rainbowAnimation, 500)
    } else {
        light.clear()
    }
    
}
