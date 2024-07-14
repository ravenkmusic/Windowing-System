// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60){
    this.width = width;
    this.height = height;
  }
  
  Size.prototype.resize = function (newWidth, newHeight){
    this.width = newWidth;
    this.height = newHeight;
  }

export function Position(x = 0, y = 0){
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (newX, newY){
  this.x = newX;
  this.y = newY;
}

export class ProgramWindow {
    constructor(screenSize, size, position){
      this.screenSize = new Size(800, 600);
      this.size = new Size();
      this.position = new Position();
    }

    resize(size){
        if (size.width < 1 || size.height < 1){
          this.size.width = 1;
          this.size.height = 1;
        } else {
          this.size.width = size.width;
          this.size.height = size.height;
        }
      }
      move(position){
        let maxX = this.screenSize.width - this.size.width;
        let maxY = this.screenSize.height - this.size.height;
        if (position.x < 0 || position.y < 0){
          this.position.x = 0;
          this.position.y = 0;
        } else if(position.x > this.screenSize.width || position.y > this.screenSize.height){
          this.position.x = maxX;
          this.position.y = maxY;
        } else {
          this.position.x = position.x;
          this.position.y = position.y;
        }
      }
      }
  }