// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */


export class Size{
    constructor(width = 80, height = 60){
        this.width = width;
        this.height = height;
    }
    
    resize(width, height){
        this.height = height;
        this.width = width;
    }

}


export class Position{
    constructor(x =0 , y=0){
        this.x = x;
        this.y = y;
    }
    move(x, y){
        this.x = x;
        this.y = y;
    }

}

export class ProgramWindow{
    constructor(){
        this.screenSize = new Size(800,600);
        this.size = new Size();
        this.position = new Position();
    }
    resize(size){
        let width = size.width > 1 ? size.width : 1, height = size.height > 1 ? size.height : 1;
        if((this.position.x + width) > this.screenSize.width){
            width = this.screenSize.width - this.position.x
        }

        if((this.position.y + height) > this.screenSize.height){
            height = this.screenSize.height - this.position.y
        }
        this.size = new Size(width,height)
    }
    move(position){
        let y = position.y > this.screenSize.height ? this.screenSize.height : position.y,
        x = position.x > this.screenSize.width ? this.screenSize.width : position.x;

        y = y < 0 ? 0 : y
        x = x < 0 ? 0 : x
        let totalXposition = this.size.width + x, totalYposition = this.size.height + y;
        if(totalXposition > this.screenSize.width){
            x = this.screenSize.width - this.size.width
        }
        if(totalYposition > this.screenSize.height){
            y = this.screenSize.height - this.size.height;
        }
        this.position = new Position(x,y)
    }
}

/**
 * @param {ProgramWindow} programWindow
 */
export function changeWindow(programWindow){
    programWindow.resize(new Size(400,300))
    programWindow.move(new Position(100, 150))
    return programWindow;
}