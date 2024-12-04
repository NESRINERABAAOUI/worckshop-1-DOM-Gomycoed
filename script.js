document.addEventListener("DOMContentLoaded", () => {
    const updateTotalPrice = () => {
      let total = 0;
      document.querySelectorAll(".card").forEach((card) => {
        const price = parseFloat(card.querySelector(".price").textContent);
        const quantity = parseInt(card.querySelector(".quantity").textContent);
        total += price * quantity;
      });
      document.querySelector(".total-price span").textContent = total.toFixed(2);
    };
  
    document.querySelectorAll(".plus-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const quantityElement = e.target.parentElement.querySelector(".quantity");
        quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
        updateTotalPrice();
      });
    });
  
    document.querySelectorAll(".minus-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const quantityElement = e.target.parentElement.querySelector(".quantity");
        const currentQuantity = parseInt(quantityElement.textContent);
        if (currentQuantity > 1) {
          quantityElement.textContent = currentQuantity - 1;
          updateTotalPrice();
        }
      });
    });
  
    document.querySelectorAll(".delete-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.target.closest(".card").remove();
        updateTotalPrice();
      });
    });
  
    document.querySelectorAll(".like-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.target.classList.toggle("liked");
      });
    });
  
    // Initialiser le total
    updateTotalPrice();
  });
  