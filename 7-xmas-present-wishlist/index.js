const itemsForWishlist = [
  "Cadbury's Dairy Milk Chocolate",
  "A PS5 (if only)",
  "Doctor Who on Blu Ray",
  "A really really good book",
];

let wishlist = document.getElementById("wishlist");

itemsForWishlist.forEach((item) => {
  let li = document.createElement("li");
  li.innerText = item;
  wishlist.appendChild(li);
});

/** Challenge: 
    - Iterate over the wishlist array.
    - Dynamically render your wishlist from the array.
    - Style the wishlist with CSS.
  **/
