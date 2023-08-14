## Some note taking about dart
- **Factory constructor**
    - This type of constructor avoid the class from returning its instance when it's called
    - Main used when you need to deserialize data (e.g from json to class object)
    - example:
        ```
        class User{
            string? name;
            int? age;
            User({this.name, this.age})

             // this constructor deserialize json object into class User object
             factory User.fromJSON(Map<string, int> json)=>User(name:json["user], age:json["age"]);
        }
        ```
- **Static Members**
    - this make a variables or methods to belong to its class and not in the class instances
    - This is accomplish  by adding a ``static `` keyword in the variables or methods:
        - example: 
        ```
         class User{
            static int age = 34;
            static string fname = "EJS";

            static getMe()=> {'name':fname, 'age':age}
         }

         // to access age
         var my_age = User.age;

         // access returning value from method getMe
         var realMe = User.getMe();
        ```

        - No needs to have class instance so as to access its attributes and methods.

- **Singleton class**
    - This is class that its constructor is private i.e it's accessed only within a class. 
    - singleton style is common way to be used if you need to create a class the will be instatiated only and only once;
    - it's mainly used in database help
    - it's declaration:

    ```
    class DbHelper{
        DbHelper._() // this is private/internal constructor
        static  final DbHelper dbHelper_instance = DbHelper._()

        // since factory constructor don't need to return insrance lets use here 
        // this will avoid our class to be known as singleton class
        factor DbHelper() => dbHelper_instance
    }

    // way to access DbHelper (if you didn't include factory constructor)
    final  db = DbHelper.dbHelper_instance; // remember the use of static member

    // if you've used factory constructor
    final db = DbHelper() // pretty way
    ```


### Without no time should be aware of the following concept and how they used in dart:

- Sound null safety
- Dart analyzer
- Type Promotion
- Flow analysis
- **Null aware operators**
    - *if-null operator (??)*
        - this check if a value left of double question mark is null. if true it assign ``my_uni`` a value at the right side else assign it  the value in the left side:
            ```
            String? uni;
            final my_uni = uni ?? "provide a name"
            ```
    - **Null aware assignment operator (??=)**
        - if it's null the  assign this new value otherwise retains its value:
            ```
            // this check if dev provide its programming language otherwise he/she's PHP dev :)
            String? programming_lang;
            programming_lang ??= "PHP";
            ```

    - Null aware access operator (?.) or Null aware method invocation operator
    - .. assertion operator (!)
    - .. cascade operator(?..)
    - .. index operator (?[])
    - .. spread operator (...?)


## NAMING STYLE IN DART
- In dart we're using the following common ways for naming variables
    
    - *snake_case*
        - commonly used in:
            - folder naming: e.g: ``model , user_model``
            - naming dart file. e.g: ``main.dart , auth_service.dart``
            - import alias/prefix: e.g ``import "dart:math" as math , import "flutter:widget" as my_widget" `` 

    - *UpperCamelCase (Pascal case)*
        - You Must Use this naming convention in:
            - naming dart classes/enum eg: `class User{} , class CustomerModel {}`

    - *lowerCamelCase* used in naming:
        - class members
            - named constructor eg. {CustomerModel.**loyalCustomer()**}
            - Methods eg: ``void myFunctionName()``
            - Variables/fields/attributes/properties eg: ``String myVarName = "PHP Joker"`` 
            - constant variables 


    - **note:** It's bad practice to use:
        - only UPPERCASE naming convention ``we're not pythonists :)`` , however this convention commonlt used in other language to declare **const** variables
        - only lowercase naming convention

         