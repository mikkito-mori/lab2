function setup()
{
	createCanvas(1024, 576);
}

function draw()
{
    noStroke();
	background(100, 155, 255); 
    fill(160, 32, 240);
    stroke(1);
    strokeWeight(4);
    isPressed();
    

}
function idle()
{
    rect(420,340,40,60);
    circle(440,310,45);
    line(420,350,390,385);
    line(460,350,490,385);
    line(430,400,430,440);
    line(450,400,450,440);
    point(430,310);
    point(450,310);
}

function StayRight()
{
    rect(420,340,40,60);
    circle(440,310,45);
    line(440,400,440,440);
    line(440,350,440,385);
    point(450,310);
}

function StayLeft()
{
    rect(420,340,40,60);
    circle(440,310,45);
    line(440,400,440,440);
    line(440,350,440,385);
    point(430,310);
}

function Jump()
{
    rect(420,340,40,60);
    circle(440,310,45);
    line(420,350,390,385);
    line(460,350,490,385);
    line(430,400,430,420);
    line(450,400,450,420);
    line(450,420,430,400);
    line(430,420,410,400);
    point(430,310);
    point(450,310);
}

function JumpRight()
{
    rect(420,340,40,60);
    circle(440,310,45);
    line(440,400,440,420);
    line(440,350,440,385);
    line(440,420,410,440);
    point(450,310);
}

function JumpLeft()
{
    rect(420,340,40,60);
    circle(440,310,45);
    line(440,400,440,420);
    line(440,420,460,440);
    line(440,350,440,385);
    point(430,310);
}

function isPressed()
{
    
    if(key == 'q')
        {
            JumpLeft();
        }
    else if (key == 'd')
        {
            StayRight();
        }
    else if(key == 'a')
        {
            StayLeft();
        }
    else if(key == 'e')
        {
            JumpRight();
        } 
    else if(key == ' ')
        {
            Jump();
        }
    else   
        {
            idle();
        }
}