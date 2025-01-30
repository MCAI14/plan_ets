def on_overlap_tile(sprite, location):

scene.on_overlap_tile(SpriteKind.player, myTiles.tile1, on_overlap_tile)

Nave = sprites.create(img("""
    . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . .
    e e e e e e e e e e e e e . . . . .
    e d d d d d d d d d d d e e . . . .
    e d d d d d d d d d d d d e e . . .
    e d d 4 4 d d d d 4 4 d d d e e . .
    e d 4 7 7 4 d d 4 7 7 4 d d d e e e
    e d 2 7 7 2 d d 2 7 7 2 d d d e e e
    e d d 2 2 d d d d 2 2 d d d e e . .
    e d d d d d d d d d d d d e e . . .
    e d d d d d d d d d d d d e . . . .
    e e e e e e e e e e e e e e . . . .
    . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . .
"""), SpriteKind.player)

backgroundcolor = 18

scene.set_background_color(backgroundcolor)

game.show_long_text("Bem-vindo ao nosso jogo! Criado pelo teu amigo Cao_Atrevido! ", DialogLayout.CENTER)

speed = 100

controller.move_sprite(Nave, speed, speed)

scene.camera_follow_sprite(Nave)

tiles.set_current_tilemap(tilemap("""level1"""))

tiles.place_on_random_tile(Nave, sprites.dungeon.dark_ground_center)
