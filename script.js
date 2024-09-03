document.addEventListener('DOMContentLoaded', function () {
    const dropdownSelect = document.getElementById('dropdown-select');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const countriesUrl = 'https://restcountries.com/v3.1/all';

    fetch(countriesUrl)
        .then(response => response.json())
        .then(data => {
            data.forEach(country => {
                const currencies = country.currencies ? Object.entries(country.currencies) : [];
                if (currencies.length > 0) {
                    const [currencyCode, currencyDetails] = currencies[0];
                    const currencySymbol = currencyDetails.symbol || 'No Symbol';
                    const flagUrl = country.flags?.png || ''; // URL of the flag image

                    const item = document.createElement('div');
                    item.className = 'dropdown-item';
                    item.innerHTML = `
                        <img src="${flagUrl}" alt="${country.name.common} flag" class="flag">
                        ${country.name.common} (${currencyCode} ${currencySymbol})
                    `;
                    item.addEventListener('click', () => {
                        dropdownSelect.textContent = `${country.name.common} (${currencyCode} ${currencySymbol})`;
                        dropdownMenu.style.display = 'none';
                    });

                    dropdownMenu.appendChild(item);

                    if (country.name.common === 'India') {
                        dropdownSelect.innerHTML = ` <img src="${flagUrl}" alt="${country.name.common} flag" class="flag"> ${country.name.common} (${currencyCode} ${currencySymbol})`;
                    }
                }
            });
        })
        .catch(error => console.error('Error fetching country data:', error));

    dropdownSelect.addEventListener('click', () => {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Close the dropdown if clicked outside
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.dropdown')) {
            dropdownMenu.style.display = 'none';
        }
    });
});

const menuToggle = document.getElementsByClassName('menu-toggle')[0];
const menuDrawer = document.getElementsByClassName('menu-drawer')[0];
const closeDrawer = document.getElementsByClassName('cross-img')[0];
menuToggle.addEventListener('click', () => {
    menuDrawer.classList.add('open');
});
closeDrawer.addEventListener('click', () => {
    menuDrawer.classList.remove('open');
});

const shopArrow = document.querySelector(".shop-arrow");
const shoplist = document.querySelector(".shop-menu-item");

shopArrow.addEventListener('click', () => {
    if (shoplist.style.display === 'none' || shoplist.style.display === '') {
        shoplist.style.display = 'block'; // Show the shop list
    } else {
        shoplist.style.display = 'none'; // Hide the shop list
    }
    if (shopArrow.src === "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yMy4yNDUgNGwtMTEuMjQ1IDE0LjM3NC0xMS4yMTktMTQuMzc0LS43ODEuNjE5IDEyIDE1LjM4MSAxMi0xNS4zOTEtLjc1NS0uNjA5eiIvPjwvc3ZnPg==") {
        shopArrow.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yMy4yNDUgMjBsLTExLjI0NS0xNC4zNzQtMTEuMjE5IDE0LjM3NC0uNzgxLS42MTkgMTItMTUuMzgxIDEyIDE1LjM5MS0uNzU1LjYwOXoiLz48L3N2Zz4=";
    } else {
        shopArrow.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yMy4yNDUgNGwtMTEuMjQ1IDE0LjM3NC0xMS4yMTktMTQuMzc0LS43ODEuNjE5IDEyIDE1LjM4MSAxMi0xNS4zOTEtLjc1NS0uNjA5eiIvPjwvc3ZnPg==";
    }
});

const seasonArrow = document.querySelector(".season-arrow");
const seasonlist = document.querySelector(".season-menu-item");
seasonArrow.addEventListener('click', () => {
    if (seasonlist.style.display === 'none' || seasonlist.style.display === '') {
        seasonlist.style.display = 'block'; // Show the shop list
    } else {
        seasonlist.style.display = 'none'; // Hide the shop list
    }
    if (seasonArrow.src === "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yMy4yNDUgNGwtMTEuMjQ1IDE0LjM3NC0xMS4yMTktMTQuMzc0LS43ODEuNjE5IDEyIDE1LjM4MSAxMi0xNS4zOTEtLjc1NS0uNjA5eiIvPjwvc3ZnPg==") {
        seasonArrow.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yMy4yNDUgMjBsLTExLjI0NS0xNC4zNzQtMTEuMjE5IDE0LjM3NC0uNzgxLS42MTkgMTItMTUuMzgxIDEyIDE1LjM5MS0uNzU1LjYwOXoiLz48L3N2Zz4=";
    } else {
        seasonArrow.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yMy4yNDUgNGwtMTEuMjQ1IDE0LjM3NC0xMS4yMTktMTQuMzc0LS43ODEuNjE5IDEyIDE1LjM4MSAxMi0xNS4zOTEtLjc1NS0uNjA5eiIvPjwvc3ZnPg==";
    }
})

// const itemsshop = document.querySelector(".main-header--elements-left--list--items--shop");
// const shopcontainer = document.querySelector(".shop-container");
// itemsshop.addEventListener('mouseover',()=> {
//     shopcontainer.style.display = "flex";
// })
// itemsshop.addEventListener('mouseleave', () => {
//     shopcontainer.style.display = "none";
// });
// shopcontainer.addEventListener('mouseleave', () => {
//     shopcontainer.style.display = "none";
// });
const itemsshop = document.querySelector(".main-header--elements-left--list--items--shop");
const shopcontainer = document.querySelector(".shop-container");

// Show the shop container when the mouse hovers over the shop item
itemsshop.addEventListener('mouseover', () => {
    shopcontainer.style.display = "flex";
});

// Hide the shop container when the mouse leaves both the shop item and the container itself
itemsshop.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (!shopcontainer.matches(':hover')) {
            shopcontainer.style.display = "none";
        }
    }, 100); // small delay to allow mouse to move from itemsshop to shopcontainer
});

shopcontainer.addEventListener('mouseleave', () => {
    shopcontainer.style.display = "none";
});


const itemsseason = document.querySelector(".main-header--elements-left--list--items--season");
const seasoncontainer = document.querySelector(".season-container");
itemsseason.addEventListener('mouseover', () => {
    seasoncontainer.style.display = "flex";
})
itemsseason.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (!seasoncontainer.matches(':hover')) {
            seasoncontainer.style.display = "none";
        }
    }, 100);
});
seasoncontainer.addEventListener('mouseleave', () => {
    seasoncontainer.style.display = "none";
});
var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 2000,
    },
});
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // Slider direction (horizontal/vertical)
        loop: true, // Loop through slides
        autoplay: {
            delay: 3000, // Delay between slides in ms
            disableOnInteraction: false, // Keep autoplay running after user interaction
        },
        effect: 'slide', // Slide effect (can be 'fade', 'cube', etc.)
    });
});
// Set the countdown date
var countDownDate = new Date("Oct 30, 2024 15:37:25").getTime();

var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the countdown date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with class="timer--container"
    document.querySelector(".timer--container").innerHTML = 
    `<div class="time">
        <h1>${days}</h1>
        <span>DAYS</span>
    </div>
    <div class="time">
        <h1>${hours}</h1>
        <span>HOURS</span>
    </div>
    <div class="time">
        <h1>${minutes}</h1>
        <span>MINUTES</span>
    </div>
    <div class="time">
        <h1>${seconds}</h1>
        <span>SECONDS</span>
    </div>`;

    // If the countdown is over, display "EXPIRED"
    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".timer--container").innerHTML = "EXPIRED";
    }
}, 1000);


document.addEventListener('DOMContentLoaded', function () {
    const footerdropdownSelect = document.getElementById('footer-dropdown-select');
    const footerdropdownMenu = document.getElementById('footer-dropdown-menu');
    const footercountriesUrl = 'https://restcountries.com/v3.1/all';

    fetch(footercountriesUrl)
        .then(response => response.json())
        .then(data => {
            data.forEach(country => {
                const currencies = country.currencies ? Object.entries(country.currencies) : [];
                if (currencies.length > 0) {
                    const [currencyCode, currencyDetails] = currencies[0];
                    const currencySymbol = currencyDetails.symbol || 'No Symbol';
                    const flagUrl = country.flags?.png || ''; // URL of the flag image

                    const footeritem = document.createElement('div');
                    footeritem.className = 'footer-dropdown-item';
                    footeritem.innerHTML = `
                        <img src="${flagUrl}" alt="${country.name.common} flag" class="flag">
                        ${country.name.common} (${currencyCode} ${currencySymbol})
                    `;
                    footeritem.addEventListener('click', () => {
                        footerdropdownSelect.innerHTML = `
                            <img src="${flagUrl}" alt="${country.name.common} flag" class="flag">
                            ${country.name.common} (${currencyCode} ${currencySymbol})
                        `;
                        footerdropdownMenu.style.display = 'none';
                    });

                    footerdropdownMenu.appendChild(footeritem);

                    // Set India as the default selected option
                    if (country.name.common === 'India') {
                        footerdropdownSelect.innerHTML = `
                            <img src="${flagUrl}" alt="${country.name.common} flag" class="flag">
                            ${country.name.common} (${currencyCode} ${currencySymbol})
                        `;
                    }
                }
            });
        })
        .catch(error => console.error('Error fetching country data:', error));

    // Toggle the dropdown menu
    footerdropdownSelect.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the click from bubbling up
        footerdropdownMenu.style.display = footerdropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Close the dropdown if clicked outside
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.footerdropdown')) {
            footerdropdownMenu.style.display = 'none';
        }
    });
});
