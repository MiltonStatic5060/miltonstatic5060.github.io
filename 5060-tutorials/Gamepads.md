Gamepads are the game controllers that we use to actually control the robot. These are connected to a phone that the driver possesses, which then further connects to the robot phone, which sends commands the robot's modules and controllers.

Gamepads defined in the code give us values when we press a button or move an analog stick.

***Most buttons give us true/false. These are:***
    
    //true pressed, false unpressed
    a
    b
    x
    y
    dpad_up
    dpad_down
    dpad_left
    dpad_right
    guide
    start
    back
    left_bumper
    right_bumper
    left_stick_button
    right_stick_button

***Then there are buttons and sticks that give us a number value, usually decimal, called type `double` in Java.***

    left_bumper    //value 0 unpressed, 1 when pressed
    right_bumper

    left_stick_y   //value -1 up and 1 down
    left_stick_x   //value -1 left and 1 right
    right_stick_y  
    right_stick_x  

We are always allowed to use two gamepads, `gamepad1` and `gamepad2`.

## Example Code

    //press a button to set servo to position 0.5
    if ( gamepad1.a ){
        servo1.setPosition(0.5);
    }


    //analog stick has same -1 to 1 values
    //as the input for the motors' power
        motorL.setPower( gamepad2.left_stick_y );
        motorR.setPower( gamepad2.right_stick_y );
    /**this is tank style driving!**/

