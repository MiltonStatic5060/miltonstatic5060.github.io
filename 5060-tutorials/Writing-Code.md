We use a programming language, **Java**  
**Java** is an object-oriented, statically-typed language. (not important)

[Click Here For A Java Crash Course](https://github.com/MiltonStatic5060/5060-tutorials/wiki/How-To-Java)
  
You must use and make **Variables** and **Functions**.    
- **Variables** represent motors, servos, and sensors on robot.  
- **Functions** do things. Controlling motors, servos and getting sensor data.

---  

# OpModes
**Opmodes** are **Java classes** that are the blueprint that tell the robot when to move which parts.

We fill in three sections, 
the **Variable Section**,  
the **Initialization Section**,   
the **Loop Section**.  

VARIABLE Section starts when the opmode is chosen.  
Then the robot INITIALIZES, starting the engines.  
Finally it runs. It LOOPS a set of commands controlled by the game controller.

--- 
***All of three sections together:***

    public class RyanOpMode extends OpMode {
        //Variable Section
        //Place Code Here

        public void init(){
            //Initialization Section

            //Place Code Here
        }

        public void loop(){
            //Loop Section

            //Place Code Here
        }
    }

# Variable Section
The **Variable Section** is where we define the variables.  Variables can be devices on the robot, or they can store information.
  
    //Variable Section
    DcMotor motorLeft;
    DcMotor motorRight;
    Servo servoArm;
    double motorPower = 0.55; 
    boolean onTheGround = True;
--- 
### Variable Types
Variables can store numbers, letters, words, boolean (true/false).  All variables have a type.  Only variables of the same type can usually be added or subtracted, or combined.

These are the only **primitive types** we care about.
- `double` - a decimal number and can be negative or positive.
- `int` - integer value (there is a size limit but it's like 1000 or -999).
- `boolean` - a `true` or a `false`

These are some **Device Types**.  
- [`DcMotor`](https://miltonstatic5060.github.io/5060-tutorials/com/qualcomm/robotcore/hardware/DcMotor.html)
- [`Servo`](https://miltonstatic5060.github.io/5060-tutorials/com/qualcomm/robotcore/hardware/Servo.html)
- [`TouchSensor`](https://miltonstatic5060.github.io/5060-tutorials/com/qualcomm/robotcore/hardware/TouchSensor.html)
- [`UltrasonicSensor`](https://miltonstatic5060.github.io/5060-tutorials/com/qualcomm/robotcore/hardware/UltrasonicSensor.html)
- [`DcMotorController`](https://miltonstatic5060.github.io/5060-tutorials/com/qualcomm/robotcore/hardware/DcMotorController.html)
- [`ServoController`](https://miltonstatic5060.github.io/5060-tutorials/com/qualcomm/robotcore/hardware/ServoController.html)
- [and a whole bunch of other ones](https://miltonstatic5060.github.io/5060-tutorials/com/qualcomm/robotcore/hardware/package-summary.html)

---
# Initialization Section
This is where the robot activates its hardware - Motors, Servos, or Sensors - like starting a car.  You can also store data in variables here.

    public void init(){  
        motorLeft = hardwareMap.dcmotor.get("motor_1");  
        servoArm = hardwareMap.servo.get("bob");  
        onTheGround = False;  
    }  
---
We activate individual robot devices, motors, servos, sensors, etc.  
  
     public void init(){
       motorLeft = hardwareMap.dcMotor.get("bob");
       //We name motors whatever we want on the phone, which is the "bob" part
       motorLeft.setMode(RUN_WITHOUT_ENCODERS);
       //Or we can set some modes

Go to the [Device Types](https://github.com/MiltonStatic5060/5060-tutorials/wiki/Device-Types) page to learn more about which functions can be run during init

# Loop Section
The functions in this section run continuously when the robot starts.  Functions set the power of motors, the position of servos, or retrieve the data from sensors.  One can change or use variables that store data as well. 
  
    public void loop(){  
        servoArm.setPosition(0.33);  
        if(gamepad1.left_stick_y);  
        motorRight.setPower(motorPower);
    }
---  

Conditionals say that commmands run when a game controller button is pushed. That is the `if` statement. 

    public void loop(){
        motorLeft.setPower(gamepad1.left_stick_y);
        //set the power value to something between -1 and 1
        //left_stick_y will return or give a value between -1 and 1

        if(gamepad2.a){ //this is game controller 2's "a" button
            motorLeft.setPower(-1); //Full power, backwards
        }
    }

Go to the [Device Types](https://github.com/MiltonStatic5060/5060-tutorials/wiki/Device-Types) page to learn more about which functions can be run during loop  

[Back to the Top](https://github.com/MiltonStatic5060/5060-tutorials/wiki/Writing-Code#top)