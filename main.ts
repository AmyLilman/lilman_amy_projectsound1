while (true) {
    if (input.soundLevel() > 90) {
        light.setAll(light.rgb(204, 207, 68))
    } else {
        light.clear()
    }
    
}
