import 'dart:math';

import 'package:dart_mind_opener/dart_mind_opener.dart' as dart_mind_opener;

void main(List<String> arguments) {
  List<String>? buddyName;
  String? buddy1 = buddyName?[3];

  Random result = Random(42);

  const firstName = 'Bob';
  if (firstName == 'Bob') {
    const lastName = 'Smith';
  } else if (firstName == 'Ray') {
    const lastName = 'Wenderlich';
  }
// final fullName = firstName + ' ' + lastName; // this error caused  by scope of lastName variable

// LIST

  List<String> listName = ["CSE", "CS", "TE"];
  print(listName.first);

  const americanCars = ["TESLA Model X", "BMW X5"];
  const japanCars = ["TOYOTA  Harrier", "TOYOTA V8"];
  List<String>? xCars;
  final showRoomCars = [
    "Range Rover",
    ...japanCars,
    ...americanCars,
    ...?xCars
  ];

  print(showRoomCars);

  // SET
  Set<String> wealthMenSet = {'WarreBuffet', "Elon-MUSK", "Jeff Bezos"};
  print(wealthMenSet);

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
