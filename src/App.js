import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Red Apple",
  "🍏": "Green Apple",
  "🍐": "Pear",
  "🍑": "Peach",
  "🍒": "Cherries",
  "🍓": "Strawberry",
  "🥝": "Kiwi Fruit",
  "🍅": "Tomato",
  "🥥": "Coconut",
  "🥑": "Avocado",
  "🍆": "Eggplant",
  "🥔": "Potato",
  "🥕": "Carrot",
  "🌽": "Ear of Corn",
  "🌶️": "Hot Pepper",
  "🥒": "Cucumber",
  "🥬": "Leafy Green",
  "🥦": "Broccoli",
  "🧄": "Garlic",
  "🧅": "Onion",
  "🍄": "Mushroom",
  "🥜": "Peanuts",
  "🌰": "Chestnut",
  "🍞": "Bread",
  "🥐": "Croissant",
  "🥖": "Baguette Bread",
  "🥨": "Pretzel",
  "🥯": "Bagel",
  "🥞": "Pancakes",
  "🧇": "Waffle",
  "🧀": "Cheese Wedge",
  "🍖": "Meat on Bone",
  "🍗": "Poultry Leg",
  "🥩": "Cut of Meat",
  "🥓": "Bacon",
  "🍔": "Hamburger",
  "🍟": "French Fries",
  "🍕": "Pizza",
  "🌭": "Hot Dog",
  "🥪": "Sandwich",
  "🌮": "Taco",
  "🌯": "Burrito",
  "🥙": "Stuffed Flatbread",
  "🧆": "Falafel",
  "🥚": "Egg",
  "🍳": "Cooking",
  "🥘": "Shallow Pan of Food",
  "🍲": "Pot of Food",
  "🥣": "Bowl with Spoon",
  "🥗": "Green Salad",
  "🍿": "Popcorn",
  "🧈": "Butter",
  "🧂": "Salt",
  "🥫": "Canned Food",
  "🍱": "Bento Box",
  "🍘": "Rice Cracker",
  "🍙": "Rice Ball",
  "🍚": "Cooked Rice",
  "🍛": "Curry Rice",
  "🍜": "Steaming Bowl",
  "🍝": "Spaghetti",
  "🍠": "Roasted Sweet Potato",
  "🍢": "Oden",
  "🍣": "Sushi",
  "🍤": "Fried Shrimp",
  "🍥": "Fish Cake with Swirl",
  "🥮": "Moon Cake",
  "🍡": "Dango",
  "🥟": "Dumpling",
  "🥠": "Fortune Cookie",
  "🥡": "Takeout Box",
  "🦪": "Oyster",
  "🍦": "Soft Ice Cream",
  "🍧": "Shaved Ice",
  "🍨": "Ice Cream",
  "🍩": "Doughnut",
  "🍪": "Cookie",
  "🎂": "Birthday Cake",
  "🍰": "Shortcake",
  "🧁": "Cupcake",
  "🥧": "Pie",
  "🍫": "Chocolate Bar",
  "🍬": "Candy",
  "🍭": "Lollipop",
  "🍮": "Custard",
  "🍯": "Honey Pot",
  "🍼": "Baby Bottle",
  "🥛": "Glass of Milk",
  "☕": "Hot Beverage",
  "🍵": "Teacup Without Handle",
  "🍶": "Sake",
  "🍾": "Bottle with Popping Cork",
  "🍷": "Wine Glass",
  "🍸": "Cocktail Glass",
  "🍹": "Tropical Drink",
  "🍺": "Beer Mug",
  "🍻": "Clinking Beer Mugs",
  "🥂": "Clinking Glasses",
  "🥃": "Tumbler Glass",
  "🥤": "Cup with Straw",
  "🧃": "Beverage Box",
  "🧉": "Mate",
  "🧊": "Ice"
};

var food1 = ["🥞", "🍹", "🥨", "🥬", "🦪", "🥧", "🍱", "🥟"];
var food2 = ["🍒", "🧃", "🍷", "🥐", "🍮", "🧁"];
// var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("See meaning here");

  function emojiInputHandler() {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    var errorMsg = "Sorry couldn't find it in our database :-(";
    if (userInput in emojiDictionary) {
      setMeaning(meaning);
    } else setMeaning(errorMsg);
  }

  function emojiClickHandler(item) {
    var meaning = emojiDictionary[item];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 className="headingh1"> Emoji Delights 💛</h1>
      {/* How to get hr here? */}
      <h1 className="title"> Know your Food Emojis!</h1>
      <h3>
        Enter food emoji to know what food it is or choose one of the following
      </h3>
      <input
        onChange={emojiInputHandler}
        placeholder="Enter food emoji..."
      ></input>
      <h2>
        {" "}
        <span>{meaning}</span>
      </h2>
      <ul>
        {food1.map(function (item) {
          return (
            <li key={item} onClick={() => emojiClickHandler(item)}>
              {item}
            </li>
          );
        })}
      </ul>
      {/* How to have line break <br> that's why thi */}
      <ul>
        {food2.map(function (item) {
          return (
            <li key={item} onClick={() => emojiClickHandler(item)}>
              {item}
            </li>
          );
        })}
      </ul>
      {/* How to have blank spaces that's why thi */}
      <div className="space"></div>
      <footer>
        <div className="footer-div">Food Emoji Interpreter 😋</div>
        <p> Made with 💛 & 🧠 by Ayesha | Sep 2021 </p>
      </footer>
    </div>
  );
}
