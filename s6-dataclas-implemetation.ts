 import { Data } from "dataclass";

// 1. easily describe your data classes using just language features
class User extends Data {
  name: string = "Anon";
  age: number = 0;
}

// 2. instantiate classes while type systems ensure correctness
let user = User.create({ name: "Liza", age: 23 });
// > User { name: "Liza", age: 23 }

// 3. make changes while benefiting from immutable values
let updated = user.copy({ name: "Ann" });
// > User { name: "Ann", age: 23 }
updated = updated.copy({ name: "Liza" });
// > User { name: "Liza", age: 23 }

// 4. compare objects by their value, not reference
console.log(user === updated, user.equals(updated));


//     // this.height = height;
//     // this.angle = angle;
//     // this.strength = 100;
    
//     this.draw = function() {
//         var w = this.width/2;
//         var h = this.height/2;
        
//         translate(this.x, this.y);
//         rotate(this.angle);
        
//         // Shadow
//         noStroke();
//         fill(0, 0, 0, 120);
//         rect(-w-2, 2-h, this.width, this.height);
        
//         fill(200, 20, 20);
//         rect(-w, -h, this.width, h);
//         fill(20, 20, 200);
//         rect(-w, 0, this.width, h);
        
//         textSize(25);
//         textAlign(CENTER, CENTER);
//         fill(255, 255, 255);
//         text("N", 0, -this.height/4);
//         text("S", 0, this.height/4);
        
//         resetMatrix();
//     };
    
//     this.updatePolePositions = function() {
//         var s = (this.height / 2) * sin(this.angle);
//         var c = (this.height / 2) * cos(this.angle);

//         this.x1 = this.x + s;
//         this.x2 = this.x - s;
//         this.y1 = this.y - c;
//         this.y2 = this.y + c;
//     };
    
//     this.rotate = function(angle) {
//         this.angle += angle;
//         this.updatePolePositions();
//     };
    
//     // Set up x1, y1, x2, y2
//     this.updatePolePositions();
// };

// var Needle = function(x, y, r, theta) {
//     this.x = x;
//     this.y = y;
//     this.r = r;
//     this.theta = theta;
    
//     this.draw = function() {
//         var width = 10;
            
//         var r2 = this.r + 5;
        
//         // Shadow
//         noStroke();
//         fill(50, 50, 50, 50);
//         ellipse(this.x+2, this.y+2, r2*2+2, r2*2+2);
        
//         fill(255, 255, 255, 200);
//         stroke(40, 40, 40);
//         strokeWeight(2);
//         ellipse(this.x, this.y, r2*2+2, r2*2+2);
//         strokeWeight(1);

//         stroke(180, 180, 180);
//         line(this.x, this.y-r2, this.x, this.y+r2);
//         line(this.x-r2, this.y, this.x+r2, this.y);
//         var r3 = r2 * sin(45);
//         line(this.x-r3, this.y-r3, this.x+r3, this.y+r3);
//         line(this.x+r3, this.y-r3, this.x-r3, this.y+r3);

        
//         var s = sin(this.theta);
//         var c = cos(this.theta);
        
//         var x1 = this.x + s * r;
//         var y1 = this.y - c * r;
//         var x2 = this.x - s * r;
//         var y2 = this.y + c * r;
//         var midX1 = this.x - c * width/2;
//         var midY1 = this.y - s * width/2;
//         var midX2 = this.x + c * width/2;
//         var midY2 = this.y + s * width/2;
        
//         stroke(0, 0, 0);
//         fill(220, 20, 20);
//         triangle(midX1, midY1, x1, y1, midX2, midY2);
//         fill(250, 250, 250);
//         triangle(midX1, midY1, x2, y2, midX2, midY2);
//         fill(190, 190, 190);
//         ellipse(this.x, this.y, width, width);
//     };
    
//     this.barInteraction = function(magnet) {
//         var dx = this.x - magnet.x1;
//         var dy = this.y - magnet.y1;
//         var theta1 = atan2(dy, dx) + 90;
//         var f1 = magnet.strength / (dx*dx + dy*dy);
        
//         dx = this.x - magnet.x2;
//         dy = this.y - magnet.y2;
//         var theta2 = atan2(dy, dx) - 90;
//         var f2 = magnet.strength / (dx*dx + dy*dy);
        
//         var mx = f1 * cos(theta1) + f2 * cos(theta2);
//         var my = f1 * sin(theta1) + f2 * sin(theta2);

//         this.theta = atan2(my, mx);
//     };
// };

// var drawMarks = function(marks) {
//     stroke(10, 10, 10);
//     strokeWeight(2);
//     for (var i=0; i<marks.length; i++) {
//         var arrow = marks[i];
//         var x = arrow[0];
//         var y = arrow[1];
//         var t = arrow[2];
//         var s = markSize * sin(t);
//         var c = markSize * cos(t);
//         var x1 = x + s;
//         var y1 = y - c;
//         var x2 = x - s;
//         var y2 = y + c;
//         line(x2, y2, x1, y1);
//         line(x1, y1, x1+round(5*cos(t+60)), y1+round(5*sin(t+60)));
//         line(x1, y1, x1+round(5*cos(t+120)), y1+round(5*sin(t+120)));
//     }
// };

// var magnet = new BarMagnet(width/2, height/2, 40, 100, 270);
// var compass = new Needle(100, 200, 20, 0);
// compass.barInteraction(magnet);

// var marks = [];

// // DISPLAY
// var draw = function() {
//     background(230, 240, 250);

//     drawMarks(marks);
//     magnet.draw();
//     compass.draw();
// };

// // USER INTERACTION
// var mouseDragged = function() {
//     if (mouseButton === LEFT) {
//         compass.x = mouseX;
//         compass.y = mouseY;
//         compass.barInteraction(magnet);
//     }
// };

// var keyPressed = function() {
//     // Rotate magnet
//     if (keyCode === 37) {
//         magnet.rotate(-5);
//     } else if (keyCode === 39) {
//         magnet.rotate(5);
//     } else if (keyCode === 32) {
//         marks.push([compass.x, compass.y, compass.theta]);
      
//     }
// };
