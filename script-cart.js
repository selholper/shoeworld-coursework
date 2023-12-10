function decreaseQuantity(element) {
    let quantityElement = element.querySelector('#quantity');
    let costElement = element.querySelector('td:nth-child(4)');

    let currentQuantity = parseInt(quantityElement.textContent);
    if (currentQuantity > 1) {
        currentQuantity--;
        quantityElement.textContent = currentQuantity;
        let costPerItem = parseFloat(costElement.textContent.replace('₽', ''));
        let totalCost = currentQuantity * costPerItem;
        element.querySelector('td:nth-child(8)').textContent = totalCost.toFixed(2) + '₽';
    }
}

function increaseQuantity(element) {
    let quantityElement = element.querySelector('#quantity');
    let costElement = element.querySelector('td:nth-child(4)');

    let currentQuantity = parseInt(quantityElement.textContent);
    currentQuantity++;
    quantityElement.textContent = currentQuantity;
    let costPerItem = parseFloat(costElement.textContent.replace('₽', ''));
    let totalCost = currentQuantity * costPerItem;
    element.querySelector('td:nth-child(8)').textContent = totalCost.toFixed(2) + '₽';
}

let decreaseButtons = document.querySelectorAll('.fa-minus');
let increaseButtons = document.querySelectorAll('.fa-plus');

decreaseButtons.forEach(button => {
    button.addEventListener('click', function() {
        decreaseQuantity(this.parentNode.parentNode);
    });
});

increaseButtons.forEach(button => {
    button.addEventListener('click', function() {
        increaseQuantity(this.parentNode.parentNode);
    });
});

function removeEntry(element) {
    element.parentNode.parentNode.remove();
}

document.addEventListener('click', function(event) {
    if (event.target.matches('#remove-entry')) {
        removeEntry(event.target);
    }
});

