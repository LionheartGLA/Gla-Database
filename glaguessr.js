const chestMap = document.querySelector('.chest-map');
const mapImg = chestMap.querySelector('.map-img');

let currentFloor = 0;
let selectedFloor = 0;
let currentIsland = null;

let zoom = 1;
const zoomStep = 0.1;
const minZoom = 0.1;
const maxZoom = 5;

let posX = 0;
let posY = 0;

let isDragging = false;
let startX, startY;
let startPosX, startPosY;

let shouldFitOnLoad = true;

/* ================= TRANSFORM ================= */
function updateMapTransform() {
    mapImg.style.transform = `translate(${posX}px, ${posY}px) scale(${zoom})`;
}

/* ================= ZOOM ================= */
chestMap.addEventListener('wheel', (e) => {
    e.preventDefault();

    const rect = chestMap.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const imgX = (mouseX - posX) / zoom;
    const imgY = (mouseY - posY) / zoom;

    if (e.deltaY < 0) zoom = Math.min(zoom + zoomStep, maxZoom);
    else zoom = Math.max(zoom - zoomStep, minZoom);

    posX = mouseX - imgX * zoom;
    posY = mouseY - imgY * zoom;

    updateMapTransform();
});

/* ================= DRAG ================= */
chestMap.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    startPosX = posX;
    startPosY = posY;
});

chestMap.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    posX = startPosX + (e.clientX - startX);
    posY = startPosY + (e.clientY - startY);

    updateMapTransform();
});

['mouseup','mouseleave'].forEach(evt=>{
    chestMap.addEventListener(evt, ()=> isDragging = false);
});

/* ================= FIT IMAGE ================= */
function fitImageToContainer() {
    if (!shouldFitOnLoad) return;

    const cw = chestMap.clientWidth;
    const ch = chestMap.clientHeight;

    const iw = mapImg.naturalWidth;
    const ih = mapImg.naturalHeight;

    if (!iw || !ih) return;

    const scale = Math.min(cw/iw, ch/ih);

    zoom = scale;
    posX = (cw - iw*zoom)/2;
    posY = (ch - ih*zoom)/2;

    updateMapTransform();
}

mapImg.onload = fitImageToContainer;

/* ================= FLOOR BUTTONS ================= */
const upBtn = chestMap.querySelector(".map-up");
const downBtn = chestMap.querySelector(".map-down");

upBtn.addEventListener('click', () => {
    if (!currentIsland) return;

    if (currentFloor < currentIsland.maps.length-1){
        currentFloor++;
        selectedFloor = currentFloor;

        shouldFitOnLoad = false; // ← KEEP SCALE
        mapImg.src = currentIsland.maps[currentFloor];
    }
});

downBtn.addEventListener('click', () => {
    if (!currentIsland) return;

    if (currentFloor > 0){
        currentFloor--;
        selectedFloor = currentFloor;

        shouldFitOnLoad = false; // ← KEEP SCALE
        mapImg.src = currentIsland.maps[currentFloor];
    }
});

/* ================= ISLAND SELECT ================= */
islands.forEach(island=>{
    if (island.name === 'East Blue' || island.name === 'Grandline') return;

    const mapDiv = document.createElement('div');
    mapDiv.classList.add('map-div');
    document.querySelector('.maps-container').appendChild(mapDiv);

    const img = document.createElement('img');
    img.src = `Img/maps/${island.name}.png`;
    img.classList.add('map-icon');
    mapDiv.appendChild(img);

    const name = document.createElement('p');
    name.textContent = island.name;
    name.classList.add("map-name")
    mapDiv.appendChild(name);

    mapDiv.addEventListener('click', ()=>{
        chestMap.style.display='flex';

        currentIsland = island;
        currentFloor = 0;
        selectedFloor = 0;

        shouldFitOnLoad = true; // ← FIT ONLY HERE
        mapImg.src = island.maps[0];
    });
});

/* ================= COORDS ================= */
const coordDisplay = chestMap.querySelector('.map-coordinates');

chestMap.addEventListener('mousemove', (e)=>{
    const rect = chestMap.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    const iw = mapImg.naturalWidth;
    const ih = mapImg.naturalHeight;

    if (!iw || !ih) return;

    const ix = (mx - posX)/zoom;
    const iy = (my - posY)/zoom;

    const px = (ix/iw)*100;
    const py = (iy/ih)*100;

    if (px>=0&&px<=100&&py>=0&&py<=100)
        coordDisplay.innerText = `X:${px.toFixed(2)} Y:${py.toFixed(2)} F:${selectedFloor}`;
    else
        coordDisplay.innerText='';
});

/* ================= CLOSE ================= */
document.querySelector('.map-close-bt').addEventListener('click', ()=>{
    chestMap.style.display='none';
});
