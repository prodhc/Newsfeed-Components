// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

 
  // Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  const header =  document.querySelector(".header")

  function menuMaker(array) {

    const menuIcon = document.querySelector(".menu-button")


    const menu = document.createElement("div");
    const list = document.createElement("ul");
    // const item1 = document.createElement("li")
    // const item2 = document.createElement("li")
    // const item3 = document.createElement("li")
    // const item4 = document.createElement("li")
    // const item5 = document.createElement("li")
    // const item6 = document.createElement("li")

    array.forEach((e) => {
      const item = document.createElement("li");
      item.innerText = e;
      return list.appendChild(item)
    })

    menu.appendChild(list);
    // list.appendChild(item1);
    // list.appendChild(item2);
    // list.appendChild(item3);
    // list.appendChild(item4);
    // list.appendChild(item5);
    // list.appendChild(item6);

    menu.classList.add("menu");

    // item1.textContent = array[0];
    // item2.textContent = array[1];
    // item3.textContent = array;
    // item4.textContent = array;
    // item5.textContent = array;
    // item6.textContent = array;

    menuIcon.addEventListener("click", (event) => {
      menu.classList.toggle("menu--open");
    });

    return menu;


  // <div class="menu">
  //   <ul>
  //     {each menu item as an <li>}
  //   </ul>
  // </div>

  // The 'menuMaker' takes an array of menu items as its only argument.

  // Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  // Add those items to the <ul>

  // Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  // Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  // Step 5: Don't forget to return your div.menu.

  }

  const test = menuMaker(menuItems)
  header.appendChild(test)
  // Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.

