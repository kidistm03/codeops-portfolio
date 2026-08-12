// TODO: Hold items in an array (this is your single source of truth)
let items = [];

// TODO: Select necessary DOM elements (form, input, list, count)
const form = document.getElementById("add-form");
const input = document.getElementById("name");
const list = document.getElementById("list");
const count = document.getElementById("count");
// TODO: Write a render() function to rebuild the list from the array
// 1. Clear the current list (innerHTML = "")
// 2. Loop through the items array
// 3. Create elements, use data-id on each row, and append to the list
// 4. Update the live count paragraph

function render() {
  // 1. Clear the current list
  list.innerHTML = "";
  // 2. Loop through the items array
  items.forEach(function (item) {
    // 3. Create a row for the item
    const li = document.createElement("li");
    // Use data-id on the row
    li.dataset.id = item.id;
    // Create the item name
    const span = document.createElement("span");
    span.textContent = item.name;
    // Create the remove button
    const button = document.createElement("button");
    button.textContent = "Remove";
    button.classList.add("del");
    // If the item is bought, add the done class
    if (item.done) {
      li.classList.add("done");
    }
    // Add the name and button to the row
    li.appendChild(span);
    li.appendChild(button);
    // Add the row to the list
    list.appendChild(li);
  });
  // 4. Update the live count paragraph
  const remaining = items.filter(function (item) {
    return !item.done;
  }).length;
  count.textContent = `${remaining} items remaining`;
}

// TODO: Handle form submission
// 1. preventDefault to stop page reload
// 2. Read and validate the input
// 3. Push a new object to the items array (include a unique id and done: false)
// 4. Call render()

form.addEventListener("submit", function (e) {
  // 1. Stop the page from reloading
  e.preventDefault();

  // 2. Read and validate the input
  const name = input.value.trim();
  if (name === "") {
    return;
  }

  // 3. Add a new object to the items array
  items.push({
    id: Date.now(),
    name: name,
    done: false,
  });

  // 4. Call render()
  render();
  input.value = "";
});

// TODO: Set up event delegation on the #list
// 1. Listen for clicks on the parent <ul>
// 2. Use e.target and closest() to find the clicked row
// 3. Determine if the user is toggling ".done" or removing a row
// 4. Update the items array accordingly
// 5. Call render()

list.addEventListener("click", function (e) {
  // 2. Find the clicked row
  const row = e.target.closest("li");
  if (!row) {
    return;
  }

  // Get the id of the clicked row
  const id = Number(row.dataset.id);

  // 3. Check if the Remove button was clicked
  if (e.target.classList.contains("del")) {
    // 4. Update the items array accordingly
    items = items.filter(function (item) {
      return item.id !== id;
    });
  } else {
    // 3. Otherwise, toggle the bought state
    items.forEach(function (item) {
      if (item.id === id) {
        item.done = !item.done;
      }
    });
  }

  // 5. Call render()
  render();
});
