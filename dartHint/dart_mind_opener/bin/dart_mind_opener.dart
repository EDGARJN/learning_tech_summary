import 'package:dart_mind_opener/dart_mind_opener.dart' as dart_mind_opener;
import 'package:dart_mind_opener/map_collection.dart';
import 'package:test/test.dart';

void main(List<String> arguments) {
  List<String>? buddyName;
  String? buddy1 = buddyName?[3];

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

  // Map
  MapModel map = MapModel();
  Map stock = map.stockItem;

  print(stock.keys);
  print(stock.values);
  print(stock.entries);

  // loop over the map keys
  // for (var key in stock.keys) {
  //   print(stock[key]);
  // }
  List stocks = [3,5,6,1,'MAMA'];
  var data = stocks.map((value) => value);
  map.overBothKeyAndVal();
  print(data);

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
