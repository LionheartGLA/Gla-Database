
/* =========================================
   EVENT CONFIGURATION
========================================= */


/* =========================================
   MARKER CONFIGURATION
========================================= */

const CHEST_MARKER = {
    id: 'chest',
    dataKey: 'chests',
    storageKey: 'markedChests',

    icon: 'Img/closedChest.png',
    className: 'map-chest-icon',
    iconClass: 'chest-icon-img',

    showNumber: true,
    showWarning: false,

    counter: null
};

const EGG_MARKER = {
    id: 'egg',
    dataKey: 'eggs',
    storageKey: 'markedEggs',

    icon: 'Img/egg.png',
    className: 'map-egg-icon',
    iconClass: 'egg-icon-img',

    showNumber: true,
    showWarning: true,

    counter: {
        container: '.egg-count',
        number: '.egg-count-number'
    },

    enabled: () => eggEvent
};


const OSIRIS_MARKER = {
    id: 'osiris',
    dataKey: 'osiris',
    storageKey: 'markedOsiris',
    icon: 'Img/osiris.png',
    className: 'map-osiris-icon',
    iconClass: 'osiris-icon-img',
    showNumber: true,
    showWarning: false,
    counter: null
};


const mapMarkers = [
    CHEST_MARKER,
    EGG_MARKER,
    OSIRIS_MARKER,
];


/* =========================================
   LOCAL STORAGE
========================================= */

function getMarkedItems(marker) {
    try {
        const data = localStorage.getItem(marker.storageKey);

        return data ? JSON.parse(data) : {};
    } catch (error) {
        console.error('Error loading markers:', error);
        return {};
    }
}

function saveMarkedItems(marker, data) {
    try {
        localStorage.setItem(
            marker.storageKey,
            JSON.stringify(data)
        );
    } catch (error) {
        console.error('Error saving markers:', error);
    }
}


/* =========================================
   DOM ELEMENTS
========================================= */

const mapSelector = document.querySelector('.map-selection');
const mapSelectorButton = document.querySelector('.map-selection-bt');

const mapUpButton = document.querySelector('.map-up');
const mapDownButton = document.querySelector('.map-down');

const chestMap = document.querySelector('.chest-map');
const mapImg = chestMap.querySelector('.map-img');
const coordDisplay = chestMap.querySelector('.map-coordinates');

const loadingText = document.querySelector('.map-loading');


/* =========================================
   MAP STATE
========================================= */

let selectedMap = null;

let currentFloor = 0;
let currentFloorElements = [];

let zoom = 1;

const zoomStep = 0.1;
const minZoom = 0.1;
const maxZoom = 3;

let posX = 0;
let posY = 0;

let isDragging = false;

let startX = 0;
let startY = 0;

let startPosX = 0;
let startPosY = 0;

let dragMoved = false;
let suppressNextClick = false;

let lastCoords = null;


/* =========================================
   MAP SELECTOR
========================================= */

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

            document.querySelector('.map-select-img').src =
                `Img/Maps/${island.name}.png`;

            document.querySelector('.island-name').textContent =
                island.name;

            loadMap(true);
        });
    });
}

populateMapSelector();

mapSelectorButton.addEventListener('click', () => {
    mapSelector.classList.toggle('open');
});


/* =========================================
   MAP TRANSFORM
========================================= */

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

    mapImg.style.transform =
        `translate(${posX}px, ${posY}px) scale(${zoom})`;

    updateMapElementsPosition();
}


/* =========================================
   MOUSE WHEEL ZOOM
========================================= */

chestMap.addEventListener('wheel', (e) => {
    e.preventDefault();

    if (!mapImg.naturalWidth) return;

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
}, { passive: false });


/* =========================================
   POINTER / DRAG / PINCH ZOOM
========================================= */

const pointers = new Map();

let initialPinchDistance = null;
let initialZoom = zoom;

function getDistance(p1, p2) {
    const dx = p1.clientX - p2.clientX;
    const dy = p1.clientY - p2.clientY;

    return Math.sqrt(dx * dx + dy * dy);
}

function resetPinch() {
    initialPinchDistance = null;
}

chestMap.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;

    pointers.set(e.pointerId, {
        clientX: e.clientX,
        clientY: e.clientY
    });

    if (pointers.size > 1) {
        isDragging = false;
        dragMoved = true;
        suppressNextClick = true;

        resetPinch();
        return;
    }

    isDragging = true;

    dragMoved = false;
    suppressNextClick = false;

    startX = e.clientX;
    startY = e.clientY;

    startPosX = posX;
    startPosY = posY;

    chestMap.style.cursor = 'grabbing';
});

chestMap.addEventListener('pointermove', (e) => {
    if (!pointers.has(e.pointerId)) return;

    pointers.set(e.pointerId, {
        clientX: e.clientX,
        clientY: e.clientY
    });

    // PINCH ZOOM
    if (pointers.size === 2) {
        const [p1, p2] = Array.from(pointers.values());

        const currentDistance = getDistance(p1, p2);

        if (!initialPinchDistance) {
            initialPinchDistance = currentDistance;
            initialZoom = zoom;
            return;
        }

        const scale = currentDistance / initialPinchDistance;

        const newZoom = Math.max(
            minZoom,
            Math.min(maxZoom, initialZoom * scale)
        );

        const rect = chestMap.getBoundingClientRect();

        const centerX =
            ((p1.clientX + p2.clientX) / 2) - rect.left;

        const centerY =
            ((p1.clientY + p2.clientY) / 2) - rect.top;

        const imgX = (centerX - posX) / zoom;
        const imgY = (centerY - posY) / zoom;

        zoom = newZoom;

        posX = centerX - imgX * zoom;
        posY = centerY - imgY * zoom;

        updateMapTransform();

        dragMoved = true;
        suppressNextClick = true;

        return;
    }

    // NORMAL DRAGGING
    if (!isDragging) return;

    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
        dragMoved = true;
        suppressNextClick = true;
    }

    if (!dragMoved) return;

    posX = startPosX + dx;
    posY = startPosY + dy;

    updateMapTransform();
});

function endPointer(e) {
    pointers.delete(e.pointerId);

    if (pointers.size < 2) {
        resetPinch();
    }

    isDragging = false;
    chestMap.style.cursor = 'grab';
}

chestMap.addEventListener('pointerup', endPointer);
chestMap.addEventListener('pointercancel', endPointer);


/* =========================================
   PREVENT ACCIDENTAL CLICKS AFTER DRAGGING
========================================= */

chestMap.addEventListener('click', (e) => {
    if (!suppressNextClick) return;

    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();

    suppressNextClick = false;
}, true);


/* =========================================
   LOAD MAP
========================================= */

function loadMap(showLoading = true) {
    if (!selectedMap) return;

    if (showLoading) {
        loadingText.style.display = 'block';
        mapImg.style.visibility = 'hidden';

        chestMap.querySelectorAll('.map-element').forEach(e => {
            e.style.visibility = 'hidden';
        });
    }

    mapImg.onload = () => {
        fitImageToContainer();

        renderMapElements();

        mapImg.style.visibility = 'visible';

        chestMap.querySelectorAll('.map-element').forEach(e => {
            e.style.visibility = 'visible';
        });

        loadingText.style.display = 'none';

        updateFloorButtons();
        updateAllMarkerCounters();
    };

    mapImg.src = selectedMap.maps[currentFloor];

    // Handle cached images
    if (mapImg.complete && mapImg.naturalWidth) {
        mapImg.onload();
    }
}


/* =========================================
   FIT IMAGE TO CONTAINER
========================================= */

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


/* =========================================
   RENDER ALL MARKERS
========================================= */

function renderMapElements() {
    if (!selectedMap) return;

    chestMap.querySelectorAll('.map-element').forEach(e => {
        e.remove();
    });

    currentFloorElements = [];

    mapMarkers.forEach(marker => {
        if (marker.enabled && !marker.enabled()) return;

        renderMarkersOnMap(
            marker,
            selectedMap,
            currentFloor
        );
    });

    updateMapElementsPosition();
    updateAllMarkerCounters();
}


/* =========================================
   GENERIC MARKER RENDERER
========================================= */

function renderMarkersOnMap(marker, island, floor) {
    const items = island[marker.dataKey] || [];

    const markedItems = getMarkedItems(marker);

    items.forEach((item, index) => {
        if (item.floor !== floor) return;

        const elementId =
            `${island.name}-${marker.id}-${index}-floor-${item.floor}`;

        const container = document.createElement('div');

        container.classList.add(
            'map-element',
            marker.className
        );

        container.dataset.id = elementId;

        // Icon
        const icon = document.createElement('img');

        icon.src = marker.icon;
        icon.classList.add(marker.iconClass);
        icon.draggable = false;

        container.appendChild(icon);

        // Number
        if (marker.showNumber) {
            const numberLabel = document.createElement('div');

            numberLabel.classList.add('chest-number');
            numberLabel.innerText = index + 1;

            container.appendChild(numberLabel);
        }

        // Warning
        if (marker.showWarning && item.warn !== undefined) {
            const warning = document.createElement('div');

            warning.classList.add('egg-warning');
            warning.innerText = item.warn;

            container.appendChild(warning);
        }

        chestMap.appendChild(container);

        // Restore saved marker
        if (markedItems[elementId]) {
            applyMarker(container);
        }

        // CLICK TO ADD / REMOVE X
        container.addEventListener('click', (e) => {
            e.stopPropagation();

            if (suppressNextClick) {
                suppressNextClick = false;
                return;
            }

            toggleMapMarker(marker, container);
        });

        // Register position
        currentFloorElements.push({
            data: item,
            element: container
        });
    });
}


/* =========================================
   TOGGLE MARKER
========================================= */

function toggleMapMarker(marker, container) {
    const id = container.dataset.id;

    const markedItems = getMarkedItems(marker);

    if (container.classList.contains('marked')) {
        // REMOVE X
        container.classList.remove('marked');

        const existingMarker =
            container.querySelector('.map-marker');

        if (existingMarker) {
            existingMarker.remove();
        }

        delete markedItems[id];
    } else {
        // ADD X
        applyMarker(container);

        markedItems[id] = true;
    }

    // SAVE TO BROWSER
    saveMarkedItems(marker, markedItems);

    // UPDATE COUNTER
    updateMarkerCounter(marker);
}


/* =========================================
   CREATE X MARKER
========================================= */

function applyMarker(container) {
    if (container.querySelector('.map-marker')) return;

    const marker = document.createElement('div');

    marker.classList.add('map-element', 'map-marker');

    marker.innerText = 'X';

    container.classList.add('marked');
    container.appendChild(marker);
}


/* =========================================
   GENERIC COUNTERS
========================================= */

function updateMarkerCounter(marker) {
    if (!marker.counter || !selectedMap) return;

    const counterContainer = document.querySelector(
        marker.counter.container
    );

    const counterNumber = document.querySelector(
        marker.counter.number
    );

    if (!counterContainer || !counterNumber) return;

    const enabled = marker.enabled ? marker.enabled() : true;

    const items = selectedMap[marker.dataKey] || [];

    if (!enabled || items.length === 0) {
        counterContainer.style.display = 'none';
        return;
    }

    const markedItems = getMarkedItems(marker);

    let marked = 0;

    items.forEach((item, index) => {
        const id =
            `${selectedMap.name}-${marker.id}-${index}-floor-${item.floor}`;

        if (markedItems[id]) {
            marked++;
        }
    });

    counterContainer.style.display = 'flex';

    counterNumber.innerText = `${marked}/${items.length}`;
}

function updateAllMarkerCounters() {
    mapMarkers.forEach(marker => {
        updateMarkerCounter(marker);
    });
}


/* =========================================
   UPDATE MARKER POSITIONS
========================================= */

function updateMapElementsPosition() {
    const imgWidth = mapImg.naturalWidth || mapImg.width;
    const imgHeight = mapImg.naturalHeight || mapImg.height;

    currentFloorElements.forEach(({ data, element }) => {
        const left =
            posX + (data.x / 100) * imgWidth * zoom;

        const top =
            posY + (data.y / 100) * imgHeight * zoom;

        element.style.left = `${left}px`;
        element.style.top = `${top}px`;
    });
}


/* =========================================
   CENTER MAP ON ELEMENT
========================================= */

function centerMapOnElement(element, desiredZoom = 2) {
    const imgWidth = mapImg.naturalWidth;
    const imgHeight = mapImg.naturalHeight;

    const containerWidth = chestMap.clientWidth;
    const containerHeight = chestMap.clientHeight;

    zoom = Math.max(
        minZoom,
        Math.min(desiredZoom, maxZoom)
    );

    const x = (element.x / 100) * imgWidth * zoom;
    const y = (element.y / 100) * imgHeight * zoom;

    posX = (containerWidth / 2) - x;
    posY = (containerHeight / 2) - y;

    updateMapTransform();
}


/* =========================================
   MAP COORDINATES
========================================= */

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

    if (
        percentX >= 0 &&
        percentX <= 100 &&
        percentY >= 0 &&
        percentY <= 100
    ) {
        coordDisplay.innerText =
            `X: ${percentX.toFixed(2)}  ` +
            `Y: ${percentY.toFixed(2)}  ` +
            `F: ${currentFloor}`;

        lastCoords = {
            x: percentX,
            y: percentY,
            floor: currentFloor
        };
    } else {
        coordDisplay.innerText = '';
        lastCoords = null;
    }
});

chestMap.addEventListener('click', () => {
    if (!lastCoords) return;

    console.log(
        `{ x: ${lastCoords.x.toFixed(2)}, ` +
        `y: ${lastCoords.y.toFixed(2)}, ` +
        `floor: ${lastCoords.floor} }`
    );
});


/* =========================================
   FLOOR NAVIGATION
========================================= */

function changeFloor(direction) {
    if (!selectedMap) return;

    const maxFloor = selectedMap.maps.length - 1;

    const newFloor = Math.max(
        0,
        Math.min(maxFloor, currentFloor + direction)
    );

    if (newFloor === currentFloor) return;

    currentFloor = newFloor;

    loadMap(false);
}

function addButtonPress(button, callback) {
    button.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        callback();
    });
}

addButtonPress(mapUpButton, () => changeFloor(1));
addButtonPress(mapDownButton, () => changeFloor(-1));

function updateFloorButtons() {
    if (!selectedMap) return;

    const maxFloor = selectedMap.maps.length - 1;

    mapUpButton.style.opacity =
        currentFloor >= maxFloor ? '0.3' : '1';

    mapDownButton.style.opacity =
        currentFloor <= 0 ? '0.3' : '1';
}


/* =========================================
   START MAP
========================================= */

function startMap() {
    if (!islands || islands.length === 0) return;

    selectedMap = islands[0];

    loadMap(true);
    updateFloorButtons();
}


/* =========================================
   RETURN BUTTON
========================================= */

document.querySelector('.rot-bt').addEventListener('click', () => {
    window.location.replace('index.html');
});


/* =========================================
   INITIALIZE
========================================= */

startMap();
