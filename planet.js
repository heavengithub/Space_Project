class Planet {
    constructor()
    {
        this.eimage = loadImage("Images/Non_Playing_Images/earth.jpg")
        this.nimage = loadImage("Images/Non_Playing_Images/neptune.jpg")
        this.uimage = loadImage("Images/Non_Playing_Images/uranus.jpg")
        this.simage = loadImage("Images/Non_Playing_Images/saturn.jpg")
        this.meimage = loadImage("Images/Non_Playing_Images/mercury.jpg")
        this.jimage = loadImage("Images/Non_Playing_Images/jupiter.jpg")
        this.moimage = loadImage("Images/Non_Playing_Images/moon.jpg")
        this.suimage = loadImage("Images/Non_Playing_Images/sun.jpg")
        this.aeimage = loadImage("Images/Non_Playing_Images/Aestroid.jpg")
        this.rocketimage = loadImage("Images/Playing_Images/rocket.png")
    }

    display(){
        earth = createSprite(200,200)
        earth.addImage("e",this.eimage)

        drawSprites();
    }
}