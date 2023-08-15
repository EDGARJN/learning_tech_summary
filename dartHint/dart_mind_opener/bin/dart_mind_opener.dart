import 'dart:math';

import 'package:dart_mind_opener/dart_mind_opener.dart' as dart_mind_opener;

void main(List<String> arguments) {
  List<String>? buddyName;
  String? buddy1 = buddyName?[3];

  Random result = Random(42);
  

  String? me;
  me = "meame";
  print(User.age);
  print(result.toString());
  bool answer = isRealProgrammer("Dart")!;
  print(answer);
  print(buddy1);
  print('Hello world: ${dart_mind_opener.calculate()}!');
}

String? myName() {
  String? z;
  return z;
}

class User {
  static String name = "We ZOMBIE";
  static int age = 20;
}

bool? isRealProgrammer(String? language) {
  if (language == "Dart") {
    return true;
  } else if (language == "PHP") {
    return false;
  }

  return false;
}

// fikraOVU
class Buddy {
  String? name;
  int? age;
}

// calling class properties by using cascade operator(..)
Buddy buddy = Buddy()
  ..name = "Kambona"
  ..age = 21;
