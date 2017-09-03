***This is a crash course in Java, teaching you just enough of the basics to program the robot.  Go ahead and open up your code editor of choice and get started. Note: these are simplified lessons. [Here](https://www.tutorialspoint.com/java/java_basic_syntax.htm) are advanced ones.***

# Programming in General

**Comments**
Comments are notes in the code and they are ignored by the computer.  

    //This is a single-line comment
    //This is also a single-line comment

    /** This
    is a
    multi-line
    comment
    **/

To program one uses **functions** and **variables** to make a computer do computations.  

***This is a function***

    System.out.println( "Hello World." );
    //This makes the system print out a line of text
***or***

    System.out.println( 8 + 9 );
    //This prints out the number 17

`System.out.println();` is a function that makes the system print out a line of text, whatever in parentheses.  

Put a semicolon at the end of each statement.  
Examples follow.

***These are variables***

    int myNumber = 98;
    boolean myBool = true;
    double myNumber0 = 45.65;

Variables store information.  
`int` types store an integer  ex. 62, -100, 0...  
`double` can hold numbers with decimals ex. 0, -3.3, 0.4 ...  
`boolean` types hold a `true` or `false`   
`String` types hold words (called strings)

    String aWord = "Two Words";
    System.out.println( aWord );
    //This will print out Two Words
    //only counts as word when it has quotes.
    //It is a variable name without quotes.

***Programmers do math***

    int x;
    x = 8 + 8  //It's 16
    x = 8 * 8  //It's 64
    x = 8 - 9  //It's -1
    x = 8 / 8  //It's 1

    x = 8 / 9  //It's 0
    x = 8 / 5  //It's 1 
    //Java rounds decimals down on integers

    x = Math.pow( 8 , 2 ) //It's 64.0 
    //outputs a type double even though int types went in

    x = 50 % 7 //It's 1
    //This is a modulo. It gives remainders.

***You can use variables in functions***

    int myNumber = 8 * 7;
    System.out.println( myNumber );
    //this prints out the number 56

    String myWord = "Hello Programmer";
    System.out.println( myWord );
    //this prints out the text Hello Programmer
    //the double quotes indicate a word, called a string in programming

# Java Classes
In Java, each file of code we write makes a class.  The file name is the class name. Uppercase the first letter, then uppercase the first letter of each word that follows. No spaces. 
filename: `MyClassIsRightHere.java`

    public class MyClassIsRightHere {
        public static void main(){
            System.out.println("I am function.");
        }
    }

In a class we make functions and variables. We fill functions with other functions and variables.  We make some functions give us back data and then put that into functions again.

    package jcode;
    public class MyClassIsRightHere {
        public static void main(String[] args){
            
            System.out.println( helloFunc() );
            //This line will print 62

        }
        public static int helloFunc(){
            int number = 62;
            return number;
        }
    }

You can **import** the stuff from another class/package and use it in your current class.

    import jcode.MyClassIsRightHere;
    public class MyNewClass {
        public static void main(String[] args){
            
            int myNumber = MyClassIsRightHere.helloFunc();

            //myNumber equals 62
        }
    }

Just forget the `import` statement when the two classes are in the same folder.  In this example, jcode is the folder that holds MyClassIsRightHere.java

# Java Identifiers
The `public static void` thing is confusing.

When you make a class or function, you say `public` to allow other classes to use its functions.  `helloFunc()` of `MyClassIsRightHere` is public, so you can use it in `MyNewClass`. There is also `private` for functions and says outside classes can't use it.


The `static` is explained in **Java Objects** section.  
(The word `static` is either used or left out.)

    public static void aFunction(){}
    public void bFunction(){}


The word before the function name is the `return` type. `return` means the function gives back data.  

 `void` is a variable type.  It actually means **nothing**.  When a function has a `void` return type, it will return **nothing**.  
 'int' is a variable type. When a function has an`int` return type, it will return an integer.  

    public static int helloFunc(){
        int number = 62;
        return number;
    }
    int myNumber = helloFunc();
    //myNumber equals 62 now

# Java Objects
An object is a kind of variable. It stores things in it.  Think of it as a storage box.

      ______
     /_____/|
    |  my | |
    | box | |
    |_____|/
This box is created with a blueprint. Think of building multiple houses with one blueprint, except they are multiple boxes. These boxes are metaphors for programming **objects**.

My blueprint is a java class.

    public class MyBox {
        //Instance Variables
        int height;
        int width;
        int length = 9;

        public MyBox(){
            this.height = 4;
        }

        public int getHeight(){
            return this.height;
        }
    }

In another class, I make objects and do stuff with them.

    public class StuffToDo {
        public static void main(String[] args){
            
            MyBox ryanBox = new MyBox();
            MyBox ausBox = new MyBox();

            System.out.println( ryanBox.getHeight() );
        }
    }

So these are objects.  Objects are individual containers/boxes for holding info.  They look like variables, but objects are complicated ways to store data. Objects also have functions.  Complicated is good sometimes.

`getHeight()` of the `MyBox` class doesn't have a `static` identifier.  No `static` means you need to make an object, then do the function on the object.

        public MyBox(){
            this.height = 4;
        }

        public int getHeight(){
            return this.height;
        }

Put a `static` there and you don't need to make an object first.  Like calling `helloFunc()` from its class name instead of calling `getHeight()` from the `ryanBox` object.  

    public static int helloFunc(){
        int number = 62;
        return number;
    }

# If Statement
This is an `if` statement.

    if(true){
        helloFunc();
    }

when the `if`'s parentheses have a `true` the stuff inside may run, and doesn't with `false`.

You can make a variable and put it in instead.

    boolean myTruth = false;
    if(myTruth){
        funcWontRun();
    }

These things are 

# Else Statement
This is an `if-else` usage.

    if(false){
        funcThatWontRun();
    } else {
        funcThatWill();
    }

When `if` has a `false`, the `else`'s stuff will run.

# Else-If Statement
Don't remember this. This is dumb and confusing. 

    if(false){
        funcWontRun();
    } else {
        if(true){
            funcWillRun();
        } else {
            funcWontRunEither();
        }
    }

So **The Java People** made an `else if`.

    if (false){
        funcWontRun();
    } else if (true) {
        funcWillRun();
    } else {
        funcWontRunEither();
    }

when first `if` is `false`, and the second `if` is `true`, the second will run.  
when first `if` is `true`, the first will run, no matter what the second `if` is.

***Very Different from this:***

    if (true) {
        funcWillRun();
    }
    if(true) {
        funcWillAlsoRun();
    }

# While Loop
When true, it re-runs the stuff inside over and over again forever. Don't do this. Your computer dies. Or kill your friend's computer.

    while(true) {
        x = x + 1
    }