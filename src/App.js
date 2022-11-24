import { useState } from "react";
import "./App.css";
function App() {
  const [list, setList] = useState([]);
  var a = ":";
  var arr = ["mike", "matt", "nancy", "adam", "jenny", "nancy", "adam"];
  var name;
  for (var j = 0; j < arr.length; j++) {
    name = arr[j];
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[j] == arr[i]) {
        arr.splice(j, 1);
        count++;
      }
    }

    var obj = { name, a, count };
    list.push(obj);
  }
  console.warn(list);
}

export default App;
