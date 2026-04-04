const STORAGE_KEY = 'markedChests';

function getMarkedChests() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
}

function saveMarkedChests(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

const EGG_STORAGE_KEY = 'markedEggs';

function getMarkedEggs() {
    return JSON.parse(localStorage.getItem(EGG_STORAGE_KEY)) || {};
}

function saveMarkedEggs(data) {
    localStorage.setItem(EGG_STORAGE_KEY, JSON.stringify(data));
}

const mapSelector = document.querySelector('.map-selection');
const mapSelectorButton = document.querySelector('.map-selection-bt');

const mapUpButton = document.querySelector('.map-up');
const mapDownButton = document.querySelector('.map-down');

let selectedMap = null;

function populateMapSelector() {
    mapSelector.innerHTML = '';

    islands.forEach(island => {
        const islandElement = document.createElement('div');
        islandElement.classList.add('island');

        const islandName = document.createElement('p');
        islandName.textContent = island.name;

        const islandImage = document.createElement('img');
        islandImage.src = `Img/Maps/${island.name}.png`;
        islandImage.alt = island.name;

        islandElement.appendChild(islandImage);
        islandElement.appendChild(islandName);
        mapSelector.appendChild(islandElement);

        islandElement.addEventListener('click', () => {
            mapSelector.classList.remove('open');
            selectedMap = island;

            currentFloor = 0;

            document.querySelector('.map-select-img').src = `Img/Maps/${island.name}.png`;
            document.querySelector('.island-name').textContent = island.name;

            loadMap(true);
        });
    });
}

populateMapSelector();

mapSelectorButton.addEventListener('click', () => {
    mapSelector.classList.toggle('open');
});

const chestMap = document.querySelector('.chest-map');
const mapImg = chestMap.querySelector('.map-img');
const coordDisplay = chestMap.querySelector('.map-coordinates');

let currentFloor = 0;
let currentFloorChests = [];

let zoom = 1;
const zoomStep = 0.1;
const minZoom = 0.1;
const maxZoom = 3;

let posX = 0;
let posY = 0;

let isDragging = false;
let startX, startY;
let startPosX, startPosY;

let lastCoords = null;

function updateMapTransform() {
    const containerWidth = chestMap.clientWidth;
    const containerHeight = chestMap.clientHeight;

    const imgWidth = mapImg.naturalWidth * zoom;
    const imgHeight = mapImg.naturalHeight * zoom;

    let minX, maxX, minY, maxY;

    if (imgWidth > containerWidth) {
        minX = containerWidth - imgWidth;
        maxX = 0;
    } else {
        minX = 0;
        maxX = containerWidth - imgWidth;
    }

    if (imgHeight > containerHeight) {
        minY = containerHeight - imgHeight;
        maxY = 0;
    } else {
        minY = 0;
        maxY = containerHeight - imgHeight;
    }

    posX = Math.max(minX, Math.min(maxX, posX));
    posY = Math.max(minY, Math.min(maxY, posY));

    mapImg.style.transform = `translate(${posX}px, ${posY}px) scale(${zoom})`;

    updateMapElementsPosition();
}

chestMap.addEventListener('wheel', (e) => {
    e.preventDefault();

    const rect = chestMap.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const imgX = (mouseX - posX) / zoom;
    const imgY = (mouseY - posY) / zoom;

    if (e.deltaY < 0) {
        zoom = Math.min(zoom + zoomStep, maxZoom);
    } else {
        zoom = Math.max(zoom - zoomStep, minZoom);
    }

    posX = mouseX - imgX * zoom;
    posY = mouseY - imgY * zoom;

    updateMapTransform();
});

chestMap.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    startPosX = posX;
    startPosY = posY;
    chestMap.style.cursor = 'grabbing';
});

chestMap.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    posX = startPosX + dx;
    posY = startPosY + dy;

    updateMapTransform();
});

chestMap.addEventListener('mouseup', () => {
    isDragging = false;
    chestMap.style.cursor = 'grab';
});

chestMap.addEventListener('mouseleave', () => {
    isDragging = false;
    chestMap.style.cursor = 'grab';
    coordDisplay.innerText = '';
    lastCoords = null;
});

const loadingText = document.querySelector('.map-loading');

function loadMap(showLoading = true) {
    if (!selectedMap) return;

    if (showLoading) {
        loadingText.style.display = 'block';
        mapImg.style.visibility = 'hidden';

        chestMap.querySelectorAll('.map-element').forEach(e => {
            e.style.visibility = 'hidden';
        });
    }

    mapImg.src = selectedMap.maps[currentFloor];

    mapImg.onload = () => {
        fitImageToContainer();
        renderMapElements();

        mapImg.style.visibility = 'visible';

        chestMap.querySelectorAll('.map-element').forEach(e => {
            e.style.visibility = 'visible';
        });

        loadingText.style.display = 'none';

        updateFloorButtons();
    };
}

function fitImageToContainer() {
    const containerWidth = chestMap.clientWidth;
    const containerHeight = chestMap.clientHeight;

    const imgNaturalWidth = mapImg.naturalWidth;
    const imgNaturalHeight = mapImg.naturalHeight;

    if (!imgNaturalWidth || !imgNaturalHeight) return;

    const scaleX = containerWidth / imgNaturalWidth;
    const scaleY = containerHeight / imgNaturalHeight;

    zoom = Math.min(scaleX, scaleY);

    posX = (containerWidth - imgNaturalWidth * zoom) / 2;
    posY = (containerHeight - imgNaturalHeight * zoom) / 2;

    updateMapTransform();
}

function renderMapElements() {
    if (!selectedMap) return;

    chestMap.querySelectorAll('.map-element').forEach(e => e.remove());

    renderChestsOnMap(selectedMap, currentFloor);
    renderEggsOnMap(selectedMap, currentFloor);
}

function renderChestsOnMap(island, floor) {
    currentFloorChests = [];

    const markedChests = getMarkedChests();

    island.chests.forEach((chest, index) => {
        if (chest.floor === floor) {
            const elementId = `${island.name}-chest-${index}-floor-${chest.floor}`;

            const chestContainer = document.createElement('div');
            chestContainer.classList.add('map-element', 'map-chest-icon');
            chestContainer.dataset.id = elementId;

            const chestIcon = document.createElement('img');
            chestIcon.src = 'Img/closedChest.png';
            chestIcon.classList.add('chest-icon-img');

            const numberLabel = document.createElement('div');
            numberLabel.classList.add('chest-number');
            numberLabel.innerText = index + 1;

            chestContainer.appendChild(chestIcon);
            chestContainer.appendChild(numberLabel);
            chestMap.appendChild(chestContainer);

            if (markedChests[elementId]) {
                applyMarker(chestContainer);
            }

            chestContainer.addEventListener('click', () => {
                toggleMarker(chestContainer);
            });

            currentFloorChests.push({ data: chest, element: chestContainer });
        }
    });

    updateMapElementsPosition();
}

function renderEggsOnMap(island, floor) {
    const markedEggs = getMarkedEggs();

    island.eggs?.forEach((egg, index) => {
        if (egg.floor === floor) {
            const elementId = `${island.name}-egg-${index}-floor-${egg.floor}`;

            const eggContainer = document.createElement('div');
            eggContainer.classList.add('map-element', 'map-egg-icon');
            eggContainer.dataset.id = elementId;

            const eggIcon = document.createElement('img');
            eggIcon.src = 'Img/egg.png';
            eggIcon.classList.add('egg-icon-img');

            const numberLabel = document.createElement('div');
            numberLabel.classList.add('chest-number');
            numberLabel.innerText = index + 1;

            if (egg.warn !== undefined) {
                const warnDiv = document.createElement('div');
                warnDiv.classList.add('egg-warning');
                warnDiv.innerText = egg.warn;
                eggContainer.appendChild(warnDiv);
            }

            eggContainer.appendChild(eggIcon);
            eggContainer.appendChild(numberLabel);
            chestMap.appendChild(eggContainer);

            if (markedEggs[elementId]) {
                applyMarker(eggContainer);
            }

            eggContainer.addEventListener('click', () => {
                toggleEggMarker(eggContainer);
            });

            currentFloorChests.push({ data: egg, element: eggContainer });
        }
    });

    updateMapElementsPosition();
}

function toggleMarker(container) {
    const id = container.dataset.id;
    const markedChests = getMarkedChests();

    if (container.classList.contains('marked')) {
        container.classList.remove('marked');

        const existingMarker = container.querySelector('.map-marker');
        if (existingMarker) existingMarker.remove();

        delete markedChests[id];
    } else {
        applyMarker(container);
        markedChests[id] = true;
    }

    saveMarkedChests(markedChests);
}

function toggleEggMarker(container) {
    const id = container.dataset.id;
    const markedEggs = getMarkedEggs();

    if (container.classList.contains('marked')) {
        container.classList.remove('marked');

        const existingMarker = container.querySelector('.map-marker');
        if (existingMarker) existingMarker.remove();

        delete markedEggs[id];
    } else {
        applyMarker(container);
        markedEggs[id] = true;
    }

    saveMarkedEggs(markedEggs);
}

function applyMarker(container) {
    if (container.querySelector('.map-marker')) return;

    const marker = document.createElement('div');
    marker.classList.add('map-element', 'map-marker');
    marker.innerText = 'X';

    container.classList.add('marked');
    container.appendChild(marker);
}

function updateMapElementsPosition() {
    const imgWidth = mapImg.naturalWidth || mapImg.width;
    const imgHeight = mapImg.naturalHeight || mapImg.height;

    currentFloorChests.forEach(({ data, element }) => {
        const left = posX + (data.x / 100) * imgWidth * zoom;
        const top = posY + (data.y / 100) * imgHeight * zoom;

        element.style.left = `${left}px`;
        element.style.top = `${top}px`;
    });
}

function centerMapOnElement(element, desiredZoom = 2) {
    const imgWidth = mapImg.naturalWidth;
    const imgHeight = mapImg.naturalHeight;

    const containerWidth = chestMap.clientWidth;
    const containerHeight = chestMap.clientHeight;

    zoom = Math.min(desiredZoom, maxZoom);

    const x = (element.x / 100) * imgWidth * zoom;
    const y = (element.y / 100) * imgHeight * zoom;

    posX = (containerWidth / 2) - x;
    posY = (containerHeight / 2) - y;

    updateMapTransform();
}

chestMap.addEventListener('mousemove', (e) => {
    const rect = chestMap.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const imgWidth = mapImg.naturalWidth;
    const imgHeight = mapImg.naturalHeight;

    if (!imgWidth || !imgHeight) {
        coordDisplay.innerText = '';
        lastCoords = null;
        return;
    }

    const imgX = (mouseX - posX) / zoom;
    const imgY = (mouseY - posY) / zoom;

    const percentX = (imgX / imgWidth) * 100;
    const percentY = (imgY / imgHeight) * 100;

    if (percentX >= 0 && percentX <= 100 && percentY >= 0 && percentY <= 100) {
        coordDisplay.innerText = `X: ${percentX.toFixed(2)}  Y: ${percentY.toFixed(2)}  F: ${currentFloor}`;
        lastCoords = { x: percentX, y: percentY, floor: currentFloor };
    } else {
        coordDisplay.innerText = '';
        lastCoords = null;
    }
});

chestMap.addEventListener('click', () => {
    if (!lastCoords) return;

    console.log(`{ x: ${lastCoords.x.toFixed(2)}, y: ${lastCoords.y.toFixed(2)}, floor: ${lastCoords.floor} }`);
});

function changeFloor(direction) {
    if (!selectedMap) return;

    const maxFloor = selectedMap.maps.length - 1;

    const newFloor = Math.max(0, Math.min(maxFloor, currentFloor + direction));

    if (newFloor === currentFloor) return;

    currentFloor = newFloor;

    loadMap(false);
}

mapUpButton.addEventListener('click', () => changeFloor(1));
mapDownButton.addEventListener('click', () => changeFloor(-1));

function updateFloorButtons() {
    if (!selectedMap) return;

    const maxFloor = selectedMap.maps.length - 1;

    mapUpButton.style.opacity = currentFloor >= maxFloor ? '0.3' : '1';
    mapDownButton.style.opacity = currentFloor <= 0 ? '0.3' : '1';
}

function startMap() {
    if (!islands || islands.length === 0) return;

    selectedMap = islands[0];
    loadMap(true);
    updateFloorButtons();
}

document.querySelector('.rot-bt').addEventListener('click', () => {
    window.location.replace('index.html');
});

startMap();