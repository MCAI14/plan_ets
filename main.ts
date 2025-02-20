scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite2, location2) {
    for (let index = 0; index < 1; index++) {
        info.changeScoreBy(-1)
        scene.cameraShake(4, 500)
    }
})
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
game.showLongText("Apanha os 14 planetas terra! Ah, e cuidado, porque tanto calor faz mal à saúde!", DialogLayout.Center)
let speed = 100
controller.moveSprite(Nave, speed, speed)
scene.cameraFollowSprite(Nave)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnRandomTile(Nave, sprites.dungeon.darkGroundCenter)
