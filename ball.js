class Ball {
    constructor(x, y, i) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = p5.Vector.random2D().setMag(random(3));
        this.radius = floor(random(13, 20));
        this.index = i;
    }

    show() {
        let hue = map(this.index, 0, ballNo, 0, 255);
        fill(hue, 100, 100);
        noStroke();
        circle(this.pos.x, this.pos.y, 2 * this.radius);
    }
    update() {
        this.acc.add(gravity);
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        //this.vel.y *= 0.996; // dampen so it doesnt overwhelm the screen
        this.acc.mult(0);
        this.wallBounce();
        this.ballBounce();
        this.constrain();
    }

    wallBounce()  {
        if (this.pos.x + this.radius > width) {
            this.pos.x = width - this.radius;
            this.vel.x *= -1;
        }
        if (this.pos.x - this.radius < 0) {
            this.pos.x = 0 + this.radius;
            this.vel.x *= -1;
        }
        if (this.pos.y + this.radius > height) {
            this.pos.y = height - this.radius;
            this.vel.y *= -1;
        }
        if (this.pos.y - this.radius < 0) {
            this.pos.y = 0 + + this.radius;
            this.vel.y *= -1;
        }
    }

    ballBounce() {
        for (let other of balls) {
            let d = dist(this.pos.x, this.pos.y , other.pos.x, other.pos.y);
            if ( d < 1) {
                return
            }
            if (d < this.radius + other.radius) {
                console.log('crashed');
                let diff = createVector(this.pos.x - other.pos.x, this.pos.y - other.pos.y);
                diff.div(d);
                this.acc.add(diff);
                this.vel.mult(0.9);
                other.acc.add(diff.mult(-1));
                other.vel.mult(0.93);
                
            }
        }
    }

    constrain() {

    }

}