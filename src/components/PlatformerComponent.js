import React, { useEffect, useRef } from "react";
import Phaser from "phaser";

const PlatformerGame = () => {
  const gameRef = useRef(null);

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 300 },
          debug: false
        }
      },
      scene: {
        preload,
        create,
        update
      },
      parent: gameRef.current
    };

    let game = new Phaser.Game(config);

    function preload() {
      this.load.image("sky", "https://examples.phaser.io/assets/skies/sky2.png");
      this.load.image("ground", "https://examples.phaser.io/assets/platform.png");
      this.load.image("player", "https://examples.phaser.io/assets/sprites/phaser-dude.png");
    }

    function create() {
      this.add.image(400, 300, "sky");

      let platforms = this.physics.add.staticGroup();
      platforms.create(400, 568, "ground").setScale(2).refreshBody();
      
      let player = this.physics.add.sprite(100, 450, "player");
      player.setBounce(0.2);
      player.setCollideWorldBounds(true);
      this.physics.add.collider(player, platforms);

      this.cursors = this.input.keyboard.createCursorKeys();
      this.player = player;
    }

    function update() {
      if (this.cursors.left.isDown) {
        this.player.setVelocityX(-160);
      } else if (this.cursors.right.isDown) {
        this.player.setVelocityX(160);
      } else {
        this.player.setVelocityX(0);
      }

      if (this.cursors.up.isDown) {
        this.player.setVelocityY(-330);
      }
    }

    return () => {
      game.destroy(true);
    };
  }, []);

  return <div ref={gameRef} />;
};

export default PlatformerGame;
