while True:
    if input.sound_level() > 90:
        light.set_all(light.rgb(204, 207, 68))
    else:
        light.clear()
    #if input.light_level() < 100:
    #    music.power_up.play()