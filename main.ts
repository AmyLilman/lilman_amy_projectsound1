// while True:
//     print("Sound level: " + input.sound_level())
//     if input.sound_level() > 150:
//         light.show_animation(light.rainbowAnimation, 500)
//     else:
//         light.clear()
// while True:
//     if input.light_level() > 8:
//         music.ba_ding.play_until_done()
// music.set_volume(20)
// music.play_melody("C C G G A A G F F E E D D C G G F F E E D G G F F E E D C C G G A A G F F E E D D C ", 150)
// light.show_animation(light.rainbowAnimation, 500)
// music.set_volume(20)
// music.play_melody("C ", 150)
// light.show_animation(light.rainbowAnimation, 500)
// light.clear()
// music.play_melody("C ", 150)
// light.show_animation(light.rainbowAnimation, 500)
// light.clear()
// music.play_melody("G ", 150)
// light.show_animation(light.rainbowAnimation, 500)
// light.clear()
// music.play_melody("G ", 150)
// light.show_animation(light.rainbowAnimation, 500)
// music.play_melody("C ", 150)
// light.show_animation(light.rainbowAnimation, 500)
// light.clear()
// music.play_melody("A ", 150)
// light.show_animation(light.rainbowAnimation, 500)
// light.clear()
// music.play_melody("A  ", 150)
// light.show_animation(light.rainbowAnimation, 500)
// light.clear()
// music.play_melody("G ", 150)
// light.show_animation(light.rainbowAnimation, 500)
// light.clear()
// music.play_melody("F ", 150)
// light.show_animation(light.rainbowAnimation, 500)
// light.clear()
// music.play_melody("F ", 150)
// light.show_animation(light.rainbowAnimation, 500)
// light.clear()
// music.play_melody("E ", 150)
// light.show_animation(light.rainbowAnimation, 500)
// light.clear()
// music.play_melody("E ", 150)
// light.show_animation(light.rainbowAnimation, 500)
// light.clear()
// music.play_melody("D ", 150)
// light.show_animation(light.rainbowAnimation, 500)
// light.clear()
// music.play_melody("D ", 150)
// light.show_animation(light.rainbowAnimation, 500)
// light.clear()
// music.play_melody("G ", 150)
// light.show_animation(light.rainbowAnimation, 500)
// light.clear()
// music.play_melody("G ", 150)
// light.show_animation(light.rainbowAnimation, 500)
// light.clear()
// music.play_melody("F ", 150)
// light.show_animation(light.rainbowAnimation, 500)
// light.clear()
// music.play_melody("E ", 150)
// light.show_animation(light.rainbowAnimation, 500)
// light.clear()
// music.play_melody("E", 150)
// light.show_animation(light.rainbowAnimation, 500)
// light.clear()
// music.play_melody("D ", 150)
// light.show_animation(light.rainbowAnimation, 500)
// light.clear()
// music.play_melody("G ", 150)
// light.show_animation(light.rainbowAnimation, 500)
// light.clear()
// music.play_melody("G ", 150)
// light.show_animation(light.rainbowAnimation, 500)
// light.clear()
// music.play_melody("F ", 150)
// light.show_animation(light.rainbowAnimation, 500)
// light.clear()
// music.play_melody("F ", 150)
// light.show_animation(light.rainbowAnimation, 500)
// light.clear()
// music.play_melody("E ", 150)
// light.show_animation(light.rainbowAnimation, 500)
// light.clear()
// music.play_melody("E ", 150)
// light.show_animation(light.rainbowAnimation, 500)
// light.clear()
// music.play_melody("D ", 150)
// light.show_animation(light.rainbowAnimation, 500)
// light.clear()
// music.play_melody("C ", 150)
// light.show_animation(light.rainbowAnimation, 500)
// light.clear()
// music.play_melody("C ", 150)
// light.show_animation(light.rainbowAnimation, 500)
// light.clear()
// music.play_melody("G ", 150)
// light.show_animation(light.rainbowAnimation, 500)
// light.clear()
// music.play_melody("G ", 150)
// light.show_animation(light.rainbowAnimation, 500)
// light.clear()
// music.play_melody("A ", 150)
// light.show_animation(light.rainbowAnimation, 500)
// light.clear()
// music.play_melody("A ", 150)
// light.show_animation(light.rainbowAnimation, 500)
// light.clear()
// music.play_melody("G ", 150)
// light.show_animation(light.rainbowAnimation, 500)
// light.clear()
// music.play_melody("F ", 150)
// light.show_animation(light.rainbowAnimation, 500)
// light.clear()
// music.play_melody("F ", 150)
// light.show_animation(light.rainbowAnimation, 500)
// light.clear()
// music.play_melody("E ", 150)
// light.show_animation(light.rainbowAnimation, 500)
// light.clear()
// music.play_melody("E ", 150)
// light.show_animation(light.rainbowAnimation, 500)
// light.clear()
// music.play_melody("D ", 150)
// light.show_animation(light.rainbowAnimation, 500)
// light.clear()
// music.play_melody("D ", 150)
// light.show_animation(light.rainbowAnimation, 500)
// light.clear()
// music.play_melody("C ", 150)
// light.show_animation(light.rainbowAnimation, 500)
// light.clear()
while (true) {
    if (input.soundLevel() > 85) {
        light.setAll(light.rgb(255, 255, 255))
    } else {
        light.clear()
    }
    
    if (input.lightLevel() < 100) {
        music.powerUp.playUntilDone()
    } else {
        music.stopAllSounds()
    }
    
}
