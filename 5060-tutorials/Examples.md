<details>
    <summary>
        DcMotor 1 - First Usage
    </summary>

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
</details>
<details>
    <summary>
        DcMotor 2 - Simple Driving
    </summary>

        public class MotorTest extends OpMode {
            DcMotor motorLeft;
            DcMotor motorRight;

            public void init(){
                motorLeft = hardwareMap.dcMotor.get("motor_left");
                motorRight = hardwareMap.dcMotor.get("motor_right");

                motorRight.setDirection(DcMotor.Direction.REVERSE);
            }

            public void loop(){
                //TANK MODE
                motorLeft.setPower(gamepad1.left_stick_y);
                motorRigth.setPower(gamepad1.rigth_stick_y);

                //ONE STICK DRIVING
                //double drivePower = -(gamepad2.left_stick_y);
                //double driveDirection = gamepad2.left_stick_x;
                //double left = Range.clip(drivePower + driveDirection , -1 , 1);
                //double right = Range.clip(drivePower - driveDirection, -1 , 1)

                //motorLeft.setPower(left);
                //motorRight.setPower(right);
            }
        }
</details>
<details>
    <summary>
        DcMotor 3 - Advanced Four Wheel Driving
    </summary>

        public class SuperDriving extends OpMode {
            DcMotor leftFront;
            DcMotor leftBack;
            DcMotor rightFront;
            DcMotor rigthBack;

            public void init(){
                leftFront = hardwareMap.dcMotor.get("left_front");
                leftBack = hardwareMap.dcMotor.get("left_back");
                rightFront = hardwareMap.dcMotor.get("right_front");
                rigthBack = hardwareMap.dcMotor.get("right_back");

                rightFront.setDirection(DcMotor.Direction.REVERSE);
                rightBack.setDirection(DcMotor.Direction.REVERSE);
            }

            public void loop(){
                /**
                *    -1
                *     |
                * -1 -+- 1  These are the analog sticks' values
                *     |
                *     1
                */
                double power = -(gamepad1.left_stick_y + gamepad1.right_stick_y);
                
                double leftF = power - gamepad1.left_stick_x + gamepad1.right_stick_x;
                double leftB = power + gamepad1.left_stick_x + gamepad1.right_stick_x;
                double rightF = power + gamepad1.left_stick_x - gamepad1.right_stick_x;
                double rightB = power - gamepad1.left_stick_x - gamepad1.right_stick_x;

                leftF = Range.clip(leftF , -1 , 1);
                leftB = Range.clip(leftB , -1 , 1);
                rightF = Range.clip(rightF , -1 , 1);
                rightB = Range.clip(rightB , -1 , 1);

                leftFront.setPower(leftF);
                leftBack.setPower(leftB);
                rightFront.setPower(rightF);
                rightBack.setPower(rightB);
            }
        }
</details>
