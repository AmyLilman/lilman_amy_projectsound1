while (true) {
    if (input.soundLevel() > 100) {
        light.setAll(light.rgb(204, 207, 68))
    } else {
        light.clear()
    }
    
}
