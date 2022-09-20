function adoptCat() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");
  let emoji = prompt("What is your favorite emoji?");

  checkInfo(name, email, emoji);
}

function checkInfo(nameInput, emailInput, emojiInput) {
  if (nameInput.length > 0 && emailInput.length > 0) {
    alert(
      `Thank you ${nameInput}! We will be in touch by email, have a merry catto day! ${emojiInput}`
    );
  } else {
    alert(
      "Please input name or your email address, so we can get in touch with you."
    );
  }
}

let adoptButton = document.querySelector(".adopt-button");
adoptButton.addEventListener("click", adoptCat);
