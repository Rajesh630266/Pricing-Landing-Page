document.addEventListener("DOMContentLoaded", function() {
  const buyButtons = document.querySelectorAll('.pricing-card button');

  buyButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const productName = this.parentNode.querySelector('h2').textContent;
      const price = this.parentNode.querySelector('.price').textContent;
      const confirmationMessage = `Thank you for purchasing ${productName} for ${price}!`;

      alert(confirmationMessage);
    });
  });
});
