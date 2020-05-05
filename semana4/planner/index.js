function dailyTask() {
  let task = document.querySelector("input").value;
  let text = document.createTextNode(task);
  let newTask = document.createElement("li");
  newTask.appendChild(text);

  let weekDay = document.querySelector("select").value;

  switch (weekDay) {
    case "1":
      document.querySelector("#dom").appendChild(newTask);
      break;

    case "2":
      document.querySelector("#seg").appendChild(newTask);
      break;

    case "3":
      document.querySelector("#ter").appendChild(newTask);
      break;

    case "4":
      document.querySelector("#qua").appendChild(newTask);
      break;

    case "5":
      document.querySelector("#qui").appendChild(newTask);
      break;

    case "6":
      document.querySelector("#sex").appendChild(newTask);
      break;

    case "7":
      document.querySelector("#sab").appendChild(newTask);
      break;
  }
  document.querySelector("input").value = "";
}
