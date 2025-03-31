let selectedChar = chars[0];

function populateRotation(div, rotation) {
    const container = document.querySelector(div);
    container.style.display = 'none';
    rotation.forEach((char, index) => {
        if (char) {
            container.style.display = 'flex';
            const imgElement = document.createElement('div');
            imgElement.classList.add('rotation-img');
            imgElement.classList.add(`rot-${index}`);
            imgElement.style.backgroundImage = `url(${char.image})`;
            container.appendChild(imgElement);
        }
    });
}

populateRotation('.rotationOne', rotationOne);
populateRotation('.rotationTwo', rotationTwo);
populateRotation('.specialRot', specialRot);

function calcDate(date) {
    try {
        const oneWeekInMillis = 7 * 24 * 60 * 60 * 1000;

        const [dayT, monthT, yearT] = lastDate.split('-');
        const dateT = new Date(yearT, monthT - 1, dayT);

        const [day, month, year] = date.split('-');
        const dateV = new Date(year, month - 1, day);

        const timeDifference = dateT - dateV;

        if (timeDifference < oneWeekInMillis) {
            return "green";
        } else if (timeDifference < (oneWeekInMillis * 4)) {
            return "white";
        } else if (timeDifference < (oneWeekInMillis * 8)) {
            return "orange";
        } else {
            return "red";
        }
    } catch (error) {
        console.error("Error calculating date color:", error);
        return "red";
    }
}



function selectChar(char) {
    const selectedImage = document.querySelector(".char-selected>img");
    const selectedName = document.querySelector(".char-selected>.char-name");
    const trackContainer = document.querySelector('.track-container');

    if (selectedImage) {
        selectedImage.src = char.image;
    }
    if (selectedName) {
        selectedName.textContent = char.name;
    }

    selectedChar = char;

    if (trackContainer) {
        trackContainer.innerHTML = "";

        let dates = [...char.dates].reverse();

        dates.reverse().forEach(date => {
            const track = document.createElement('p');
            track.classList.add("char-date-container");
            track.classList.add(calcDate(date));

            if (char.class.includes("noRot")) {
                track.classList.remove("white");
                track.classList.remove("orange");
                track.classList.remove("red");
                track.classList.add('noRot');
            }

            const [day, month] = date.split('-');
            const formattedDate = `${day}/${month}`;
            track.textContent = formattedDate;

            trackContainer.appendChild(track);
        });
    }
}



const colorPriority = {
    'green': 1,
    'white': 2,
    'orange': 3,
    'red': 4,
    'noRot': 5,
};

function sortCharacters(characters) {
    return characters.sort((a, b) => {
        const lastDateA = a.dates.length > 0 ? a.dates[0] : "01-01-1970";
        const lastDateB = b.dates.length > 0 ? b.dates[0] : "01-01-1970";

        const colorClassA = calcDate(lastDateA);
        const colorClassB = calcDate(lastDateB);

        const noRotA = a.class.includes('noRot');
        const noRotB = b.class.includes('noRot');

        if (noRotA && !noRotB) {
            return colorPriority['noRot'] - (colorPriority[colorClassB] || 999);
        } else if (!noRotA && noRotB) {
            return (colorPriority[colorClassA] || 999) - colorPriority['noRot'];
        } else if (noRotA && noRotB) {
            return 0;
        }

        const priorityA = colorPriority[colorClassA] || 999;
        const priorityB = colorPriority[colorClassB] || 999;

        if (priorityA !== priorityB) {
            return priorityA - priorityB;
        }

        const [dayA, monthA, yearA] = lastDateA.split('-');
        const [dayB, monthB, yearB] = lastDateB.split('-');

        const dateA = new Date(yearA, monthA - 1, dayA);
        const dateB = new Date(yearB, monthB - 1, dayB);

        return dateB - dateA;
    });
}




function displayCharacters(characters) {
    const container = document.querySelector('.char-list');
    container.innerHTML = '';

    characters.forEach(char => {
        const charDiv = document.createElement('div');
        charDiv.classList.add('char');
        charDiv.style.backgroundImage = `url(${char.image})`;

        const latestDate = char.dates.length > 0 ? char.dates[0] : "01-01-1970";
        const dateElement = document.createElement('p');
        dateElement.classList.add('char-date');
        dateElement.classList.add(calcDate(latestDate));

        const [day, month] = latestDate.split('-');
        const formattedDate = `${day}/${month}`;
        dateElement.textContent = formattedDate;

        if (char.class.includes("noRot")) {
            dateElement.classList.remove("white");
            dateElement.classList.remove("orange");
            dateElement.classList.remove("red");
            dateElement.classList.add('noRot');
        }

        charDiv.appendChild(dateElement);

        const nameElement = document.createElement('p');
        nameElement.textContent = char.name;
        nameElement.classList.add('char-name');
        charDiv.appendChild(nameElement);

        charDiv.addEventListener('click', () => {
            selectChar(char);
        });

        container.appendChild(charDiv);
    });
}



function filterCharacters(selectedClasses, activeColorFilter, searchText = '') {
    let filteredCharacters = chars.filter(char => {
        const classFilter = selectedClasses.length === 0 || selectedClasses.every(selectedClass => char.class.includes(selectedClass));
        const nameFilter = char.name.toLowerCase().includes(searchText);

        const noRotFilter = activeColorFilter === 'noRot' && char.class.includes('noRot');
        const colorFilter = !activeColorFilter || (activeColorFilter === 'noRot' ? noRotFilter : calcDate(char.dates[0]) === activeColorFilter);

        return classFilter && nameFilter && colorFilter;
    });

    return sortCharacters(filteredCharacters);
}



function updateCharacterDisplay() {
    let selectedClasses = Array.from(document.querySelectorAll('.class-bt.selected')).map(btn => btn.id);
    let activeColorFilter = document.querySelector('.ex.selected')?.id || '';
    let searchText = document.querySelector('.search-bar').value.toLowerCase();
    let filteredCharacters = filterCharacters(selectedClasses, activeColorFilter, searchText);
    displayCharacters(filteredCharacters);
}

document.querySelectorAll('.ex').forEach(button => {
    button.addEventListener('click', function () {
        const isSelected = this.classList.contains('selected');
        if (isSelected) {
            this.classList.remove('selected');
            updateCharacterDisplay(); 
        } else {
            document.querySelectorAll('.ex').forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');
            updateCharacterDisplay();
        }
    });
});

document.querySelectorAll('.class-bt').forEach(button => {
    button.addEventListener('click', function () {
        this.classList.toggle('selected');
        updateCharacterDisplay();
    });
});

document.querySelector('.search-bar').addEventListener('input', updateCharacterDisplay);

displayCharacters(chars);
selectChar(selectedChar);
updateCharacterDisplay();

document.querySelector('.rot-bt').addEventListener('click', () => {
    window.location.replace('index.html');
})

document.querySelector('.back').addEventListener('click', () => {
    window.location.replace('index.html');
})