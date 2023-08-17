class MapModel {
  Map<String, int> stockItem = {"name": 450, "amount": 300};

  // iterate over the map keys
  overKeys() {
    for (var key in stockItem.keys) {
      print(stockItem[key]);
    }
  }

  // Iterate over the map value
  overValue() {
    for (var val in stockItem.values) {
      print(val);
    }
  }


  // iterate over both key and value
  overBothKeyAndVal() {
    for (var entry in stockItem.entries) {
      print("${entry.key} => ${entry.value}");
    }
  }
}
