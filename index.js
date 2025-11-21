let hamburger = document.getElementById("hamburger");
let navLinks = document.getElementById("navLinks");
let firstPara = document.querySelector('.firstPara');
let servicsCard = document.getElementById("servicsCard");

/* =============================
   NAV MENU TOGGLE
============================= */
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});


/* =============================
   FETCH API (ADVANCED)
============================= */
fetch("https://api.npoint.io/ecccc07e4a1fcb159b26")
    .then(res => res.json())
    .then(data => {

        // Title Set
        document.getElementById("companyname").textContent = data.mishracommnication[0];
        firstPara.textContent = data.mishracommnication[0];

        // Services Card Creation
        data.servicsCard.forEach((item, index) => {

            let card = document.createElement("div");
            card.classList.add("servicsCard5", "fadeIn");

            // Optional: Add icons (automatic)
            let icon = `<span class="emoji">📱</span>`;
            if (item.toLowerCase().includes("recharge")) icon = `<span class="emoji">⚡</span>`;
            if (item.toLowerCase().includes("accessories")) icon = `<span class="emoji">🎧</span>`;

            card.innerHTML = `${icon}<p>${item}</p>`;

            servicsCard.appendChild(card);
        });
    })
    .catch(err => {
        console.error("API Error:", err);
        servicsCard.innerHTML = `<p style="color:red;">Failed to load data!</p>`;
    });
