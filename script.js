//IF YOU ARE HERE: Use word wrap (OPTN Z - on mac idk what is on PC) i write a lot sorry.

// I use comments a lot to help me understand and keep track of what each thing is doing. Writing it out helps me remember what each peice does since i take lots of breaks and easily forget what ive done and why i did that

const form = document.getElementById("tasksForm");
const taskInput = document.getElementById("task-input");
const prioritySelect = document.getElementById("priority-select");
const taskList = document.getElementById("task-list");
const sortBtn = document.getElementById("sort-btn");
const statusMsg = document.getElementById("status-msg");
const noTasksMsg = document.getElementById("no-tasks-msg");

//Here are my variables (ik there are a lot):
let tasks = [];

// Event listener:
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskName = taskInput.value.trim(); //This will grab the input and trim off extra white space
  const taskPriority = parseInt(prioritySelect.value); // This returns a value depending on one of the three selected priorities.

  if (taskName === "") {
    statusMsg.textContent = "Please enter a task name."; // IF there isnt a task input in the feild ANDD this counts if its just spaces cuz we trimmed it earlier, then return an error message
    return;
  }

  const newTask = {
    name: taskName,
    priority: taskPriority,
  };

  tasks.push(newTask); // Pushes the new item onto array we made before!

  taskInput.value = ""; //Clears the feild
  statusMsg.textContent = "Task added!"; //Tells the user they did good!

  sortTasks(); // CALLS SORT- this sorts it before we render it
  renderTasks(); // CALLS FUNCTION -- ADD LATER that will VISUALLY render the tasks on the page.
});

function renderTasks() {
  taskList.innerHTML = ""; // this will clear the list before we redraw it. Every time this runs,, it will start from scratch. Basically this is nice cuz it keeps data in sync with the visuals

  if (tasks.length === 0) {
    noTasksMsg.style.display = "block"; //Shows the NO TASKS line
    return;
  }

  noTasksMsg.style.display = "none"; // Since we now know there are more than 0 tasks we can safely take this away

  tasks.forEach(function (task) {
    const li = document.createElement("li"); // Just adds a new LI element FOR JS  :/

    const nameSpan = document.createElement("span");
    nameSpan.className = "task-name"; // Gives the span a class for the styling of this element that we created before.
    nameSpan.textContent = task.name;

    const prioritySpan = document.createElement("span");
    prioritySpan.className = "task-priority"; // Gives the span a class for the styling of this element that we created before.
    prioritySpan.textContent =
      task.priority === 1 ? "High" : task.priority === 2 ? "Medium" : "low"; // Got the pleasure of learning this in WEB this year and while still a lil confusing it is very simple and space consuming. Just a less intuitive if-else.

    li.appendChild(nameSpan);
    li.appendChild(prioritySpan);
    taskList.appendChild(li);
    // ALL OF THE APPEND STUFF: Litereally just attatches each span into the li then the list into the task list
  });
}

//THE SAUCE: this is the entire project point. Just sorting it.

function sortTasks() {
  let swapped; // BASICALLY this is a flag that tracks whether the swaps happened during a pass.

  do {
    // Good ol do while with for loop. OUTTER LOOP: Keeps running passes through the array until a full pass completes with ZERO swaps so meaning basically that everythig is in order.
    swapped = false;

    for (let i = 0; i < tasks.length - 1; i++) {
      // FOR LOOOP! Walks through the array and compares side by side pairs. Stops 1 before the end cuz were looking at i. u get how this works tho.
      if (tasks[i].priority > tasks[i + 1].priority) {
        // Remember priority 1 is HIGH and 3: low. If current task has big number than the next, they need to swap.
        let temp = tasks[i]; // important we dont wanna lose this vlaue.  so we overwrite it then put temp in other spot.
        tasks[i] = tasks[i + 1]; // Changes the og task to the next one (essentiall swaping it)
        tasks[i + 1] = temp; // Then since we stored the og item in temp we are bringing it back to life and puting it in the spot we just pulled from.
        swapped = true; // Confirms we have finsihed swap tells the outter to do another pass to esnure were done.
      }
    }
  } while (swapped);
}

//The button i added before i realized imma have it just always be sorted so heres the code to the button that does nothing:

let timesClicked = 0;

sortBtn.addEventListener("click", function () {
  let meanMessages = [
    "Already sorted stupid",
    "Sorry that was mean, but its already been sorted",
    "Stop clicking this button",
    "ur just wasting ur battery atp",
    "im not adding any more messages on this button sorry.",
    "byeeeee",
    "",
    "",
    "",
    "Press me one more time and imma delete ur list",
    "placeholder message",
    "I fear im too lazy to keep working on this. glad u made it this far tho! Give me a good grade pls.",
    "Thanks for ur time! Peace out skillet",
  ];
  if (tasks.length === 0) {
    statusMsg.textContent = "Try adding a task first idk";
    return;
  } else if (tasks.length === 1) {
    statusMsg.textContent = "Hard to sort a list that only has one item.";
    return;
  }

  timesClicked = timesClicked + 1;
  statusMsg.textContent = meanMessages[timesClicked - 1];

  if (timesClicked == 11) {
    tasks = [];
    renderTasks();
    statusMsg.textContent = "Told you. Bye!";
    return;
  }
});
