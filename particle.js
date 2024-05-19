class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.alive = true;
        this.lifespan = maxLife;
      }
    
      show() {
        noStroke();
        let hue = map(this.lifespan, 0, maxLife, 300, 220);
        fill(hue, 100, 100);
        let size = map(this.lifespan, 0, maxLife, 0, 10);
        ellipse(this.x, this.y, size);
      }

      update() {
        if (this.alive) {
        this.lifespan -= 1;
            if (this.lifespan < 0) {
                this.alive = false;
                console.log('died');
            }
        }   
      }

}