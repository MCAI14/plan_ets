let Nave = sprites.create(img`
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
`, SpriteKind.Player)
let backgroundcolor = 18
scene.setBackgroundColor(backgroundcolor)
game.showLongText("Bem-vindo ao nosso jogo! Criado pelo teu amigo Cao_Atrevido! ", DialogLayout.Center)
let speed = 100
controller.moveSprite(Nave, speed, speed)
scene.cameraFollowSprite(Nave)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnRandomTile(Nave, sprites.dungeon.darkGroundCenter)
