class mainScene {
  
  preload() {
    this.load.image("player", "assets/amongus.png");
    this.load.image("dot", "assets/dot.png");
  }

  create() {
    this.player = this.physics.add.sprite(100, 100, "player");
    this.dot = this.physics.add.sprite(300, 300, "dot");

    this.score = 0;
    
    let style = { font: '20px Arial', fill: '#fff' };

        this.scoreText = this.add.text(20, 20, 'score: ' + this.score, style);

        this.arrow = this.input.keyboard.createCursorKeys();
  }

  update() {
        if (this.physics.overlap(this.player, this.dot)) {
            this.hit();
        }

        if (this.arrow.right.isDown) {
            this.player.x += 3;
        } else if (this.arrow.left.isDown) {
            this.player.x -= 3;
        }

        if (this.arrow.down.isDown) {
            this.player.y += 3;
        } else if (this.arrow.up.isDown) {
            this.player.y -= 3;
        }
    }


    hit() {
        this.dot.x = Phaser.Math.Between(100, 600);
        this.dot.y = Phaser.Math.Between(100, 300);

        this.score += 10;

        this.scoreText.setText('score: ' + this.score);

        this.tweens.add({
            targets: this.player,
            duration: 200,
            scaleX: 1.2,
            scaleY: 1.2,
            yoyo: true,
        });
    }
}

new Phaser.Game({
    width: 1100,
    height: 800,
    backgroundColor: '#50C878',
    scene: mainScene,
    physics: { default: 'arcade' },
    parent: 'game',
});
