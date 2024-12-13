document.addEventListener("DOMContentLoaded", function() {
    const password = "2601"; // Ваш пароль

    // Запитуємо користувача ввести пароль
    const userPassword = prompt("Введіть пароль для доступу до цієї сторінки:");
    if (userPassword !== password) {
        alert("Невірний пароль. Доступ заборонено.");
        document.body.innerHTML = "<h1>Доступ заборонено</h1>";
        return; // Виходимо з функції, якщо пароль неправильний
    }

    // Дані сайтів
    const sites = [
        { name: "mrii-chain.daocloud.it", version: "8.3.7" },
        { name: "mrii-vinnitsa.daocloud.it", version: "8.1.7" },
        { name: "mrii-kyiv.daocloud.it", version: "8.1.7" },
        { name: "mrii-lutsk.syrve.online", version: "8.3.7" },
        { name: "mrii-lviv.daocloud.it", version: "8.1.7" },
        { name: "mrii-odesa-1.syrve.online", version: "8.3.3 савінйон" },
        { name: "mrii-odesa-2.syrve.online", version: "8.3.7" },
        { name: "mrii-ternopil.daocloud.it", version: "8.1.7" },
        { name: "mrii-khm.syrve.online", version: "8.1.7" },
        { name: "mrii-chernivtsi.daocloud.it", version: "8.1.7" },
        { name: "fun-planet.syrve.online", version: "8.3.6" },
        { name: "mrii-zhytomyr.syrve.online", version: "8.3.7" },
        { name: "mrii-madagascar.daocloud.it", version: "" }
    ];

    const siteList = document.getElementById("siteList");

    sites.forEach(site => {
        const li = document.createElement("li");
        const div = document.createElement("div");
        div.classList.add("site");
        div.innerHTML = `
            <h2>${site.name}</h2>
            <p>Версія: ${site.version}</p>
        `;
        li.appendChild(div);
        siteList.appendChild(li);
    });
});
