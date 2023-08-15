## Some note taking about dart
- **Factory constructor**
    - This type of constructor that avoid the class from returning its instance when it's called
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

        // since factory constructor don't need to return instance lets use here 
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
        - this check if a value in the left of double question mark is null. if true it assign ``my_uni`` a value at the right side else assign it  the value in the left side:
            ```
            String? uni;
            final my_uni = uni ?? "provide a name"
            ```
    - **Null aware assignment operator (??=)**
        - if it's null then  assign this new value otherwise retains its value:
            ```
            // this check if dev provide its programming language otherwise he/she's PHP dev :)
            String? programming_lang;
            programming_lang ??= "PHP";
            ```

    - **Null aware access operator (?.) or Null aware method invocation operator**
        - This check object accessed if it's null. It return ``null`` if the object accessed it's null. e.g: ``name?.length;`` it'll return null if name is null otherwise it'll return a length of name;
        - This is useful when you need to perfom an action when the value is non-value

    - .. **Null aware assertion operator (!)**
        - This turn null variable into non-nullable type bu asserting ***bang operator(!)*** or **null assertion operator(!)** at the end of nullable variable;
            - eg:
                ```
                    var nonNullableString = nullableString!;

                    bool? isRealProgrammer(String? language){
                        if(language == "Dart"){
                            return true;
                        }else if(language == "PHP"){
                            return false;
                        }

                        return false
                    }

                    bool answer = isRealProgrammer("Dart")!; // it'll return true, since anyone who understand Dart is a real programmer :)

                    bool answer = isRealProgrammer("Dart"); // it'll return error: A value of type bool? can't be assigned to a variable of type bool.

                    bool answer = isRealProgrammer("Dart")?? true; // This is alternative and useful way that will avoid app crashing.
                ```

    - .. **Null aware cascade operator(?..)**
        - In the class there is ``cascade operator(..)`` that used to call multiple properties of the same object.
        - e.g
            ```
                class Buddy {
                String? name;
                int? age;
                        }

                Buddy buddy = Buddy()
                    ..name = "Kambona"
                    ..age = 21;

            ```
        - But when your object is nullable you could use (?..) to call your object properties so as to avoid app crashing. You should inser this operator for the first item of the chain
            - e.g
                ```
                Buddy? buddy2;
                buddy2
                ?..name="Yusco Dybala"
                ..age=30;
                ```
            - if the buddy2 is null then the chain will be **short circuited**, that is terminated without calling other items in the cascade chain;

    - **Null index operator (?[])**
        - This is used to access element in the list when the list might be null:
            - e.g:
                ```
                List<String>? buddyName = ["YOU","MY PATNER :)"];
                String buddy1 = buddyName?[0];
                ```
            - note: the above list can be null but not its element of type ``String``
    - .. spread operator (...?)


### Try to find out meaning of these terminology:
- Single Responsibility Principle
- SOLID principles
- DRY (Donn't Repeat Yourself)
- Higher Order Function



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

         