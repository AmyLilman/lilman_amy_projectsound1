while (true) {
    if (input.soundLevel() > 85) {
        light.setAll(light.rgb(204, 207, 68))
    } else if (input.soundLevel() < 200) {
        light.clear()
    } else {
        light.clear()
    }
    
}
