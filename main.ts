while (true) {
    if (input.soundLevel() > 200) {
        light.setAll(light.rgb(204, 207, 68))
    } else {
        light.clear()
    }
    
}
