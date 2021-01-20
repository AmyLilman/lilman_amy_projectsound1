while (true) {
    if (input.soundLevel() > 85) {
        light.setAll(light.rgb(204, 207, 68))
    }
    
    if (input.lightLevel() < 100) {
        music.powerUp.play()
    }
    
}
