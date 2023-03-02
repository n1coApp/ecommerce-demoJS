/* ========== Navigation =========== */
const navList = document.querySelector(".nav-list")

document.querySelector("#cart").onclick = () => {
  navList.classList.add("show")
  document.body.classList.add("cart-open")
}

/* ========== User Form =========== */
const formWrapper = document.querySelector(".form-wrapper")
const inputs = document.querySelectorAll(".form-box input[type = 'password']")
const icons = [...document.querySelectorAll(".form-icon")]
const spans = [...document.querySelectorAll(".form-box .top span")]
const userForm = document.querySelector(".user-form")

document.querySelector(".close-form").onclick = () => {
  userForm.classList.remove("show")
}

spans.map((span) => {
  span.addEventListener("click", (e) => {
    const color = e.target.dataset.id
    formWrapper.classList.toggle("active")
    userForm.classList.toggle("active")
    document.querySelector(":root").style.setProperty("--custom", color)
  })
})

Array.from(inputs).map((input) => {
  icons.map((icon) => {
    icon.innerHTML = `<img src="./images/eye.svg" alt="" />`

    icon.addEventListener("click", () => {
      const type = input.getAttribute("type")
      if (type === "password") {
        input.setAttribute("type", "text")
        icon.innerHTML = `<img src="./images/hide.svg" alt="" />`
      } else if (type === "text") {
        input.setAttribute("type", "password")
        icon.innerHTML = `<img src="./images/eye.svg" alt="" />`
      }
    })
  })
})

const addToCart = (title, url, price) => {
  document.getElementById('no-items').style.display = 'none'
  document.getElementById('now-items').style.display = 'inline-block'

  document.getElementById('in-cart').innerHTML += `
    <div class="product-in-cart">
      <img src="${url}" alt="">
      <div class="right">
        <h4>${title}</h4>
        <div class="pric">$${price}</div>
      </div>
    </div>
  `
  const prevTotal = parseInt(document.getElementById("total").innerHTML || 0, 10)
  window.cartTotal = prevTotal + parseInt(price, 10)
  document.getElementById("total").innerHTML = window.cartTotal
 

  document.getElementById('has-cart').style.display = 'block'
}

const checkout = ()=> {
  const valTotal =document.getElementById("total").innerHTML;
  window.open(`https://pay.h4b.dev/pl/PZauw3/?amount=${valTotal}&stay=0&callbackurl=${encodeURIComponent('https://n1coapp.github.io/ecommerce-demoJS/')}`, '_parent');
}