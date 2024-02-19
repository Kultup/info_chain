// Добавленный JavaScript для отображения и скрытия модального окна
document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var modal = document.getElementById("orderModal");
    var orderSummary = document.getElementById('orderSummary');
    orderSummary.innerHTML = '<h2>Ваш заказ:</h2>';
    
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    if (checkboxes.length === 0) {
        orderSummary.innerHTML += '<p>Вы не выбрали ничего.</p>';
    } else {
        var orderItems = '<ul>';
        checkboxes.forEach(function(checkbox) {
            orderItems += '<li>' + checkbox.value + '</li>';
        });
        orderItems += '</ul>';
        orderSummary.innerHTML += orderItems;
    }

    // Проверка на наличие алкогольных напитков
    var alcoholSelected = Array.from(checkboxes).some(function(checkbox) {
        return checkbox.name === "drink";
    });

    if (alcoholSelected) {
        // Показываем предупреждение и предлагаем пользователю подтвердить выбор
        if (confirm("Вы уверены? После предыдущего опыта у вас жопа 3 дня болела. Вы уверены, что хотите выбрать алкогольные напитки?")) {
            modal.style.display = "block";
        }
    } else {
        // Если алкогольные напитки не выбраны, показываем модальное окно без предупреждения
        modal.style.display = "block";
    }
});

// Закрыть модальное окно при нажатии на кнопку "Close"
document.getElementsByClassName("close")[0].addEventListener('click', function() {
    var modal = document.getElementById("orderModal");
    modal.style.display = "none";
});

// Закрыть модальное окно при щелчке вне его области
window.addEventListener('click', function(event) {
    var modal = document.getElementById("orderModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
