# DcMotor
Description:  
A big silver tetrix motor.  

Variable Type:  `DcMotor`  
example usage:  

    public class MotorTest extends OpMode {
        DcMotor motor1;
        public void init(){
            motor1 = hardwareMap.dcMotor.get("first_motor");
        }
        public void loop(){
            if(gamepad1.a){
                motor1.setPower(-0.5);
            } else {
                motor1.setPower(0);
            }
        }
    }

### Initialization Usage
The hardwareMap usage activates the motor and connects the real world device to your digital variable.  You must use this function for this and any device you ever use from the robot. Motors, Servos, Controllers, Modules, or Sensors.  

    armMotor = hardwareMap.dcMotor.get("my_motorName");

The `.setMode()` function allows a person to use ENCODERS.  These things act as a counter for the motor and counts how far it has gone. There are multiple modes for encoders, but all require the encoder to be attached to the physical motor itself.  It can be described as a black thingy screwed on to the spinning part of the motor.  There exist motors with built-in encoders, but ours either have it attached or don't.  Useful for making robot move a certain distance.  We just don't have any encoders.

    armMotor.setMode(RUN_WITHOUT_ENCODERS);
    armMotor.setMode(RUN_USING_ENCODERS);

NEVER SET THE POWER OF THE MOTORS IN INIT.  THIS WILL MOVE THE MOTORS AND YOU CAN'T MOVE MOTORS DURING THIS STAGE IN THE COMPETITION THEY DISQUALIFY US.

    //armMotor.setPower(0); //Don't set power of motors in init!!!

### Loop Usage
Go ahead and set the power of the motors whenever you want to now, this is the official time for the robot to be able to move.

    armMotor.setPower(1); //Must set to 0 to stop motor. 
    //motor power goes from -1 to 1

That's pretty much it.  Here's the official [DcMotor](https://miltonstatic5060.github.io/5060-tutorials/index.html) documentation

# Servo
Description:
Small black box that is able to only rotate 180 degrees or 360 degrees.  There exists a Continuous Servo, basically a pretty slow tiny motor. It is controlled by giving an angle/position so it's good for arms and gates that rotate in a slower fixed manner.

Variable Type:  `Servo`  
example usage:

    Servo myServo;

## Initialization Usage
The hardwareMap usage activates the servo and connects the real world device to your digital variable.  You must use this function for this and any device you ever use from the robot. Motors, Servos, Controllers, Modules, or Sensors.  
*required

    myServo = hardwareMap.servo.get("this_servo");

## Loop Usage
You may change the position of the servo only in this section!

    myServo.setPosition(0.5) 

    //takes in decimal value between 0 and 1.
    //You kind of have to figure out the angle that matches the position value by testing with real robot. 
    //Just guess until robot finished or servos are available

*** ***Weird Note:*** *** you are sort of allowed to set a position for some servos in initialization, but that's only for gates or whatever that have a start position.  You also have to inform Competition judges of this act in the case that you do so. Best no to even move servos until loop phase so they can penalize you either way.

# DcMotorController
Description:
Variable Type:
Example Usage:

## Initialization Usage

## Loop Usage

# ServoController
Description:
Variable Type:
Example Usage:

## Initialization Usage

## Loop Usage

