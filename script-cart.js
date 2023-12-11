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
        updateAmount();
    }
}

function increaseQuantity(element) {
    let quantityElement = element.querySelector('#quantity');
    let costElement = element.querySelector('td:nth-child(4)');

    let currentQuantity = parseInt(quantityElement.textContent);
    if (currentQuantity == 0) {
        element.querySelector('td:nth-child(2)').style.opacity = '1';
        element.style.color = "black";
    }
    currentQuantity++;
    quantityElement.textContent = currentQuantity;
    let costPerItem = parseFloat(costElement.textContent.replace('₽', ''));
    let totalCost = currentQuantity * costPerItem;
    element.querySelector('td:nth-child(8)').textContent = totalCost.toFixed(2) + '₽';
    updateAmount();
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
    let row = element.parentNode.parentNode;
    row.querySelector("#quantity").textContent = '0';
    row.querySelector('td:nth-child(8)').textContent = '0₽';
    row.querySelector('td:nth-child(2)').style.opacity = '0.2';
    row.style.color = "rgba(200, 200, 200, 0.5)";
    row.querySelector('#incQuantity').style.color = "black";
    row.querySelector('#decQuantity').style.color = "black";
    updateAmount();
}

document.addEventListener('click', function(event) {
    if (event.target.matches('#remove-entry')) {
        removeEntry(event.target);
    }
});

function checkCoupon() {
    let couponCode = document.getElementById('couponInput').value;

    if (couponCode.length === 0) {
        alert('Пожалуйста, введите номер купона');
        return;
    }

    alert("Купон недействительный");
}

function reloadPage() {
    location.reload();
}

function updateAmount() {
    let rows = document.querySelectorAll('.item-row');
    let total = 0;

    rows.forEach(function(row) {
        let amountString = row.querySelector('td:nth-child(8)').textContent;
        let amount = parseFloat(amountString.replace(/[^\d.]/g, ''));
        total += amount;
    });

    document.getElementById('subtotalAmount').textContent = total.toFixed(2) + '₽';
    document.getElementById('totalAmount').textContent = total.toFixed(2) + '₽';
}
