const addFriendBtn = document.getElementById("addFriendBtn");
const friendsContainer = document.getElementById("friendsContainer");
const MAX_FRIENDS = 3;

function createFriendBlock(index) {
  const block = document.createElement("div");
  block.className = "friend-block";

  const fioField = document.createElement("div");
  fioField.className = "form-field";
  fioField.innerHTML = `
    <label class="form-label" for="friend-fio-${index}">ФИО друга <span class="required-star">*</span></label>
    <input type="text" id="friend-fio-${index}" name="friendFio${index}" class="form-control" placeholder="Введите ФИО друга" required />
  `;

  const emailField = document.createElement("div");
  emailField.className = "form-field";
  emailField.innerHTML = `
    <label class="form-label" for="friend-email-${index}">Имейл друга <span class="required-star">*</span></label>
    <input type="email" id="friend-email-${index}" name="friendEmail${index}" class="form-control" placeholder="Введите имейл друга" required />
  `;

  const phoneField = document.createElement("div");
  phoneField.className = "form-field";
  phoneField.innerHTML = `
    <label class="form-label" for="friend-phone-${index}">Номер телефона друга <span class="required-star">*</span></label>
    <input type="tel" id="friend-phone-${index}" name="friendPhone${index}" class="form-control" placeholder="+7 777 77 77" required />
  `;

  block.appendChild(fioField);
  block.appendChild(emailField);
  block.appendChild(phoneField);

  return block;
}

addFriendBtn.addEventListener("click", () => {
  const currentFriends = friendsContainer.querySelectorAll(".friend-block").length;
  if (currentFriends < MAX_FRIENDS) {
    const newFriendBlock = createFriendBlock(currentFriends + 1);
    friendsContainer.appendChild(newFriendBlock);
    if (currentFriends + 1 === MAX_FRIENDS) {
      addFriendBtn.disabled = true;
      addFriendBtn.style.opacity = "0.5";
      addFriendBtn.style.cursor = "default";
    }
  }
});

document.querySelector(".modal-close").addEventListener("click", () => {
  alert("Модальное окно будет закрыто.");
});

document.querySelector(".btn-primary").addEventListener("click", function (e) {
  e.preventDefault(); 

  const form = document.querySelector(".modal-form");
  const fields = form.querySelectorAll(".form-control[required]");
  let isValid = true;

  fields.forEach(field => {
    const formField = field.closest(".form-field");
    const error = formField.querySelector(".form-error");
    const label = formField.querySelector(".form-label");
    const star = label.querySelector(".required-star");

    const empty = field.value === "";

    if (empty) {
      error.style.display = "block";
      if (star) star.style.color = "rgba(201, 26, 3, 1)"; 
      isValid = false;
    } 
    
    else {
      error.style.display = "none";
      if (star) star.style.color = "rgba(138, 143, 168, 1)"; 
    }
  });

  if (isValid) {
    alert("Заявка отправлена.");
  }
});

