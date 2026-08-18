const patientList = document.querySelector('.patient-list');
const patientSelectorBg = document.querySelector('.patient-selector-bg');
const craftingTables = document.querySelector('.crafting-tables');

let selectedBed = null;

const bedPatients = {
    "bed-one": null,
    "bed-two": null,
    "bed-three": null,
    "bed-four": null,
    "bed-five": null,
    "bed-six": null,
    "bed-seven": null
};

const allKurehaItems = crafters.flatMap(
    crafter => crafter.items
);

const itemByName = new Map();

for (const item of allKurehaItems) {
    itemByName.set(item.name, item);
}


const crafterByItem = new Map();

for (const crafter of crafters) {

    for (const item of crafter.items) {

        crafterByItem.set(
            item.name,
            crafter
        );

    }

}


const crafterByName = new Map();

for (const crafter of crafters) {

    crafterByName.set(
        crafter.name,
        crafter
    );

}

const tableClassMap = {
    "Armário": "Armario",
    "Prateleira": "Prateleira",
    "Geladeira": "Geladeira",
    "Cortador": "Cortador",
    "Fogão": "Fogao",
    "Toalhas": "Toalhas",
    "Pilão": "Pilao",
    "Mangás": "Mangas",
    "Remédios": "Remedios",
    "Livros": "Livros",
    "Depósito": "Deposito",
    "Vpx Quebrado": "Vpx"
};

function getAllRequiredItems(
    itemName,
    result = new Map(),
    visited = new Set()
) {

    if (visited.has(itemName)) {
        return result;
    }

    visited.add(itemName);


    const item =
        itemByName.get(itemName);


    if (!item) {

        console.warn(
            `Item "${itemName}" was not found.`
        );

        return result;
    }


    if (!item.ing) {
        return result;
    }


    for (const ingredientList of item.ing) {

        for (
            const [ingredientName, amount]
            of Object.entries(ingredientList)
        ) {

            const currentAmount =
                result.get(ingredientName) || 0;

            result.set(
                ingredientName,
                currentAmount + amount
            );


            if (itemByName.has(ingredientName)) {

                getAllRequiredItems(
                    ingredientName,
                    result,
                    visited
                );

            }

        }

    }


    return result;
}

function getRequirementsForCure(cureName) {

    const tables = new Map();

    const cureCrafter =
        crafterByItem.get(cureName);


    if (cureCrafter) {

        if (!tables.has(cureCrafter.name)) {

            tables.set(
                cureCrafter.name,
                new Map()
            );

        }


        tables
            .get(cureCrafter.name)
            .set(cureName, 1);

    }

    const ingredients =
        getAllRequiredItems(cureName);

    for (
        const [ingredientName, amount]
        of ingredients
    ) {

        const crafter =
            crafterByItem.get(ingredientName);


        if (!crafter) {

            console.warn(
                `No crafting table found for "${ingredientName}".`
            );

            continue;
        }


        if (!tables.has(crafter.name)) {

            tables.set(
                crafter.name,
                new Map()
            );

        }


        const tableItems =
            tables.get(crafter.name);


        const currentAmount =
            tableItems.get(ingredientName) || 0;


        tableItems.set(
            ingredientName,
            currentAmount + amount
        );

    }


    return tables;
}

function getAllPatientRequirements() {

    const allRequirements = new Map();


    for (
        const patient of Object.values(bedPatients)
    ) {

        if (!patient) {
            continue;
        }


        const patientRequirements =
            getRequirementsForCure(
                patient.cure
            );


        for (
            const [tableName, items]
            of patientRequirements
        ) {

            if (!allRequirements.has(tableName)) {

                allRequirements.set(
                    tableName,
                    new Map()
                );

            }


            const tableItems =
                allRequirements.get(tableName);


            for (
                const [itemName, amount]
                of items
            ) {

                const currentAmount =
                    tableItems.get(itemName) || 0;


                tableItems.set(
                    itemName,
                    currentAmount + amount
                );

            }

        }

    }


    return allRequirements;
}

function createCraftingItem(
    itemName,
    amount,
    isCure = false
) {

    const item =
        itemByName.get(itemName);


    if (!item) {
        return null;
    }


    const itemElement =
        document.createElement('div');

    itemElement.classList.add(
        'crafting-item'
    );


    if (isCure) {

        itemElement.classList.add(
            'crafting-cure'
        );

    }

    const image =
        document.createElement('img');

    image.src =
        item.img;

    image.alt =
        item.name;

    image.classList.add(
        'crafting-item-image'
    );

    const name =
        document.createElement('p');

    name.textContent =
        item.name;

    name.classList.add(
        'crafting-item-name'
    );


    const quantity =
        document.createElement('span');

    quantity.textContent =
        `x${amount}`;

    quantity.classList.add(
        'crafting-item-amount'
    );


    itemElement.appendChild(
        image
    );

    itemElement.appendChild(
        name
    );

    itemElement.appendChild(
        quantity
    );


    return itemElement;
}


function updateCraftingTables() {

    const requirements =
        getAllPatientRequirements();

    document
        .querySelectorAll('.crafting-table')
        .forEach(table => {

            table.style.display =
                'none';


            const itemsContainer =
                table.querySelector(
                    '.crafting-table-items'
                );


            if (itemsContainer) {

                itemsContainer.innerHTML =
                    '';

            }

        });

    for (const crafter of crafters) {

        const items =
            requirements.get(
                crafter.name
            );


        if (!items || items.size === 0) {
            continue;
        }


        const tableClass =
            tableClassMap[crafter.name];


        if (!tableClass) {

            console.warn(
                `No HTML class found for "${crafter.name}".`
            );

            continue;
        }


        const table =
            document.querySelector(
                `.crafting-table.${tableClass}`
            );


        if (!table) {

            console.warn(
                `Crafting table "${crafter.name}" does not exist in HTML.`
            );

            continue;
        }


        table.style.display =
            'block';


        const itemsContainer =
            table.querySelector(
                '.crafting-table-items'
            );


        if (!itemsContainer) {
            continue;
        }


        for (
            const [itemName, amount]
            of items
        ) {

            const isCure =
                Object
                    .values(bedPatients)
                    .some(
                        patient =>
                            patient &&
                            patient.cure === itemName
                    );


            const element =
                createCraftingItem(
                    itemName,
                    amount,
                    isCure
                );


            if (element) {

                itemsContainer.appendChild(
                    element
                );

            }

        }

    }

}

const patientSearch =
    document.querySelector('.patient-selector-search');


function normalizeSearchText(text) {

    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');

}


function filterPatients() {

    const searchText =
        normalizeSearchText(
            patientSearch.value.trim()
        );


    if (!searchText) {

        populatePatientList(patients);

        return;

    }


    const filteredPatients =
        patients.filter(patient => {

            const name =
                normalizeSearchText(
                    patient.name
                );


            if (name.includes(searchText)) {
                return true;
            }

            if (patient.search) {

                return patient.search.some(
                    searchTerm =>
                        normalizeSearchText(
                            searchTerm
                        ).includes(searchText)
                );

            }


            return false;

        });


    populatePatientList(
        filteredPatients
    );

}


patientSearch.addEventListener(
    'input',
    filterPatients
);


let currentPatientAudio = null;

function populatePatientList(patients) {

    if (currentPatientAudio) {

        currentPatientAudio.pause();

        currentPatientAudio.currentTime = 0;

        currentPatientAudio = null;

    }


    patientList.innerHTML = '';


    patients.forEach(patient => {

        const patientItem =
            document.createElement('div');

        patientItem.classList.add(
            'patient-item'
        );


        if (patient.audio) {

            const audioIcon =
                document.createElement('div');

            audioIcon.classList.add(
                'patient-audio-icon'
            );

            audioIcon.textContent = '♫';

            patientItem.appendChild(
                audioIcon
            );


            const audio =
                new Audio(patient.audio);

            audio.loop = true;


            patientItem.patientAudio =
                audio;

            patientItem.addEventListener(
                'mouseenter',
                () => {

                    if (
                        currentPatientAudio &&
                        currentPatientAudio !== audio
                    ) {

                        currentPatientAudio.pause();

                        currentPatientAudio.currentTime =
                            0;

                    }


                    currentPatientAudio =
                        audio;


                    audio.currentTime =
                        0;


                    audio.play().catch(error => {

                        console.warn(
                            'Could not play patient audio:',
                            error
                        );

                    });

                }
            );

            patientItem.addEventListener(
                'mouseleave',
                () => {

                    audio.pause();

                    audio.currentTime =
                        0;


                    if (
                        currentPatientAudio === audio
                    ) {

                        currentPatientAudio =
                            null;

                    }

                }
            );

        }


        const patientName =
            document.createElement('span');

        patientName.textContent =
            patient.name;

        patientName.classList.add(
            'patient-name'
        );


        patientItem.appendChild(
            patientName
        );


        const bedImg =
            document.createElement('img');

        bedImg.src =
            'Img/Kureha/bed.png';

        bedImg.classList.add(
            'bed-img'
        );

        bedImg.alt =
            '';


        patientItem.appendChild(
            bedImg
        );


        const patientImg =
            document.createElement('img');

        patientImg.src =
            patient.img;

        patientImg.classList.add(
            'patient-img'
        );

        patientImg.alt =
            patient.name;


        patientItem.appendChild(
            patientImg
        );


        patientItem.addEventListener(
            'click',
            () => {

                if (!selectedBed) {
                    return;
                }


                const bedElement =
                    document.querySelector(
                        `.${selectedBed}`
                    );


                if (!bedElement) {
                    return;
                }


                bedPatients[selectedBed] =
                    patient;


                const oldPatient =
                    bedElement.querySelector(
                        '.patient'
                    );


                if (oldPatient) {
                    oldPatient.remove();
                }

                const oldCure =
                    bedElement.querySelector(
                        '.cure'
                    );


                if (oldCure) {
                    oldCure.remove();
                }


                const patientImage =
                    document.createElement('img');

                patientImage.src =
                    patient.img;

                patientImage.classList.add(
                    'patient'
                );

                patientImage.alt =
                    patient.name;


                bedElement.appendChild(
                    patientImage
                );


                const cureItem =
                    itemByName.get(
                        patient.cure
                    );


                if (cureItem) {

                    const cure =
                        document.createElement('div');

                    cure.classList.add(
                        'cure'
                    );


                    const cureImage =
                        document.createElement('img');

                    cureImage.src =
                        cureItem.img;

                    cureImage.classList.add(
                        'cure-image'
                    );

                    cureImage.alt =
                        cureItem.name;


                    const cureInfo =
                        document.createElement('div');

                    cureInfo.classList.add(
                        'cure-info'
                    );


                    const cureName =
                        document.createElement('p');

                    cureName.innerText =
                        cureItem.name;

                    cureInfo.appendChild(
                        cureName
                    );

                    cure.appendChild(
                        cureImage
                    );

                    cure.appendChild(
                        cureInfo
                    );


                    bedElement.appendChild(
                        cure
                    );

                }
                else {

                    console.warn(
                        `Cure "${patient.cure}" was not found.`
                    );

                }


                updateCraftingTables();


                patientSelectorBg.style.display =
                    'none';

                patientSearch.value = '';

                populatePatientList(
                    patients
                );

                selectedBed =
                    null;

            }
        );


        patientList.appendChild(
            patientItem
        );

    });

}


document
    .querySelectorAll('.bed')
    .forEach(bed => {

        bed.addEventListener(
            'click',
            () => {

                selectedBed =
                    Array
                        .from(
                            bed.classList
                        )
                        .find(
                            className =>
                                className.startsWith(
                                    'bed-'
                                )
                        );


                patientSelectorBg.style.display =
                    'flex';


                patientSearch.value = '';

                populatePatientList(
                    patients
                );


                patientSearch.focus();

            }
        );

    });


populatePatientList(
    patients
);


updateCraftingTables();


const mapUpButton =
    document.querySelector('.map-up');

const mapDownButton =
    document.querySelector('.map-down');

const chestMap =
    document.querySelector('.chest-map');

const mapImg =
    chestMap.querySelector('.map-img');

const coordDisplay =
    chestMap.querySelector('.map-coordinates');


let selectedMap = null;

let currentFloor = 0;

let zoom = 1;

const zoomStep = 0.1;

const minZoom = 0.1;

const maxZoom = 3;

let posX = 0;

let posY = 0;

let isDragging = false;

let startX;

let startY;

let startPosX;

let startPosY;

let lastCoords = null;

function updateMapTransform() {

    const containerWidth =
        chestMap.clientWidth;

    const containerHeight =
        chestMap.clientHeight;


    const imgWidth =
        mapImg.naturalWidth * zoom;

    const imgHeight =
        mapImg.naturalHeight * zoom;


    let minX;
    let maxX;
    let minY;
    let maxY;


    if (imgWidth > containerWidth) {

        minX =
            containerWidth - imgWidth;

        maxX =
            0;

    }
    else {

        minX =
            0;

        maxX =
            containerWidth - imgWidth;

    }


    if (imgHeight > containerHeight) {

        minY =
            containerHeight - imgHeight;

        maxY =
            0;

    }
    else {

        minY =
            0;

        maxY =
            containerHeight - imgHeight;

    }


    posX =
        Math.max(
            minX,
            Math.min(
                maxX,
                posX
            )
        );


    posY =
        Math.max(
            minY,
            Math.min(
                maxY,
                posY
            )
        );


    mapImg.style.transform =
        `translate(${posX}px, ${posY}px) scale(${zoom})`;


    updateCraftIconsPosition();
}


chestMap.addEventListener(
    'wheel',
    (e) => {

        e.preventDefault();


        const rect =
            chestMap.getBoundingClientRect();


        const mouseX =
            e.clientX - rect.left;

        const mouseY =
            e.clientY - rect.top;


        const imgX =
            (mouseX - posX) / zoom;

        const imgY =
            (mouseY - posY) / zoom;


        if (e.deltaY < 0) {

            zoom =
                Math.min(
                    zoom + zoomStep,
                    maxZoom
                );

        }
        else {

            zoom =
                Math.max(
                    zoom - zoomStep,
                    minZoom
                );

        }


        posX =
            mouseX -
            imgX * zoom;


        posY =
            mouseY -
            imgY * zoom;


        updateMapTransform();

    }
);


chestMap.addEventListener(
    'pointerdown',
    (e) => {

        if (e.pointerType === 'touch') {
            return;
        }


        isDragging =
            true;


        startX =
            e.clientX;

        startY =
            e.clientY;


        startPosX =
            posX;

        startPosY =
            posY;


        chestMap.style.cursor =
            'grabbing';


        chestMap.setPointerCapture(
            e.pointerId
        );

    }
);


chestMap.addEventListener(
    'pointermove',
    (e) => {

        if (!isDragging) {
            return;
        }


        const dx =
            e.clientX - startX;

        const dy =
            e.clientY - startY;


        posX =
            startPosX + dx;

        posY =
            startPosY + dy;


        updateMapTransform();

    }
);


chestMap.addEventListener(
    'pointerup',
    (e) => {

        isDragging =
            false;


        chestMap.style.cursor =
            'grab';


        if (
            chestMap.hasPointerCapture(
                e.pointerId
            )
        ) {

            chestMap.releasePointerCapture(
                e.pointerId
            );

        }

    }
);


chestMap.addEventListener(
    'pointercancel',
    () => {

        isDragging =
            false;


        chestMap.style.cursor =
            'grab';

    }
);

let pointers =
    new Map();

let initialPinchDistance =
    null;

let initialZoom =
    zoom;


function getDistance(p1, p2) {

    const dx =
        p1.clientX -
        p2.clientX;

    const dy =
        p1.clientY -
        p2.clientY;


    return Math.sqrt(
        dx * dx +
        dy * dy
    );
}


chestMap.addEventListener(
    'pointerdown',
    (e) => {

        pointers.set(
            e.pointerId,
            e
        );


        if (pointers.size > 1) {

            isDragging =
                false;


            const [p1, p2] =
                Array.from(
                    pointers.values()
                );


            initialPinchDistance =
                getDistance(
                    p1,
                    p2
                );


            initialZoom =
                zoom;

        }

    }
);


chestMap.addEventListener(
    'pointermove',
    (e) => {

        if (!pointers.has(e.pointerId)) {
            return;
        }


        pointers.set(
            e.pointerId,
            e
        );


        if (pointers.size !== 2) {
            return;
        }


        const [p1, p2] =
            Array.from(
                pointers.values()
            );


        const currentDistance =
            getDistance(
                p1,
                p2
            );


        if (!initialPinchDistance) {

            initialPinchDistance =
                currentDistance;

            initialZoom =
                zoom;

            return;
        }


        const scale =
            currentDistance /
            initialPinchDistance;


        let newZoom =
            initialZoom * scale;


        newZoom =
            Math.max(
                minZoom,
                Math.min(
                    maxZoom,
                    newZoom
                )
            );


        const rect =
            chestMap.getBoundingClientRect();


        const centerX =
            (
                (p1.clientX + p2.clientX) / 2
            ) -
            rect.left;


        const centerY =
            (
                (p1.clientY + p2.clientY) / 2
            ) -
            rect.top;


        const imgX =
            (centerX - posX) / zoom;

        const imgY =
            (centerY - posY) / zoom;


        zoom =
            newZoom;


        posX =
            centerX -
            imgX * zoom;


        posY =
            centerY -
            imgY * zoom;


        updateMapTransform();

    }
);


function resetPinch() {
    initialPinchDistance = null;
}


chestMap.addEventListener(
    'pointerup',
    (e) => {

        pointers.delete(
            e.pointerId
        );


        if (pointers.size < 2) {
            resetPinch();
        }

    }
);


chestMap.addEventListener(
    'pointercancel',
    (e) => {

        pointers.delete(
            e.pointerId
        );


        resetPinch();

    }
);

function centerMapOnCraft(
    craft,
    desiredZoom = 2
) {

    const imgWidth =
        mapImg.naturalWidth;

    const imgHeight =
        mapImg.naturalHeight;


    if (
        !imgWidth ||
        !imgHeight
    ) {
        return;
    }


    const containerWidth =
        chestMap.clientWidth;

    const containerHeight =
        chestMap.clientHeight;


    zoom =
        Math.min(
            desiredZoom,
            maxZoom
        );


    const craftX =
        (craft.x / 100) *
        imgWidth *
        zoom;


    const craftY =
        (craft.y / 100) *
        imgHeight *
        zoom;


    posX =
        (containerWidth / 2) -
        craftX;


    posY =
        (containerHeight / 2) -
        craftY;


    updateMapTransform();

}


function renderCraftsOnMap(
    island,
    floor
) {


    chestMap
        .querySelectorAll(
            '.map-craft-icon'
        )
        .forEach(
            element =>
                element.remove()
        );


    if (
        !island ||
        !island.craft
    ) {
        return;
    }


    island.craft.forEach(
        craft => {

            if (
                craft.floor !== floor
            ) {
                return;
            }


            const crafter =
                crafterByName.get(
                    craft.name
                );


            if (!crafter) {

                console.warn(
                    `Crafter "${craft.name}" was not found in crafters.`
                );

                return;
            }


            const craftContainer =
                document.createElement('div');


            craftContainer.classList.add(
                'map-craft-icon'
            );


            const crafterClass =
                tableClassMap[
                craft.name
                ];


            if (crafterClass) {

                craftContainer.classList.add(
                    crafterClass
                );

            }

            craftContainer.craftData =
                craft;


            const craftIcon =
                document.createElement('img');


            craftIcon.src =
                crafter.img;


            craftIcon.alt =
                crafter.name;


            craftIcon.classList.add(
                'craft-icon-img'
            );

            craftContainer.appendChild(
                craftIcon
            );


            chestMap.appendChild(
                craftContainer
            );

            craftContainer.addEventListener(
                'pointerdown',
                (e) => {

                    e.preventDefault();

                    e.stopPropagation();


                    centerMapOnCraft(
                        craft,
                        2
                    );

                }
            );

        }
    );


    updateCraftIconsPosition();

}

function updateCraftIconsPosition() {

    const imgWidth =
        mapImg.naturalWidth;

    const imgHeight =
        mapImg.naturalHeight;


    if (
        !imgWidth ||
        !imgHeight
    ) {
        return;
    }


    chestMap
        .querySelectorAll(
            '.map-craft-icon'
        )
        .forEach(
            icon => {

                const craft =
                    icon.craftData;


                if (!craft) {
                    return;
                }

                const x =
                    (craft.x / 100) *
                    imgWidth *
                    zoom;


                const y =
                    (craft.y / 100) *
                    imgHeight *
                    zoom;

                icon.style.left =
                    `${posX + x}px`;


                icon.style.top =
                    `${posY + y}px`;

            }
        );

}


function loadMap(
    centerOnCraft = null
) {

    if (!selectedMap) {
        return;
    }


    mapImg.style.visibility =
        'hidden';


    mapImg.src =
        selectedMap.maps[
        currentFloor
        ];


    mapImg.onload = () => {

        fitImageToContainer();


        mapImg.style.visibility =
            'visible';


        updateFloorButtons();

        renderCraftsOnMap(
            selectedMap,
            currentFloor
        );


        if (centerOnCraft) {

            centerMapOnCraft(
                centerOnCraft,
                2
            );

        }

    };

}


function fitImageToContainer() {

    const containerWidth =
        chestMap.clientWidth;

    const containerHeight =
        chestMap.clientHeight;


    const imgNaturalWidth =
        mapImg.naturalWidth;

    const imgNaturalHeight =
        mapImg.naturalHeight;


    if (
        !imgNaturalWidth ||
        !imgNaturalHeight
    ) {
        return;
    }


    const scaleX =
        containerWidth /
        imgNaturalWidth;


    const scaleY =
        containerHeight /
        imgNaturalHeight;


    zoom =
        Math.min(
            scaleX,
            scaleY
        );


    posX =
        (
            containerWidth -
            imgNaturalWidth * zoom
        ) / 2;


    posY =
        (
            containerHeight -
            imgNaturalHeight * zoom
        ) / 2;


    updateMapTransform();

}

chestMap.addEventListener(
    'mousemove',
    (e) => {

        const rect =
            chestMap.getBoundingClientRect();


        const mouseX =
            e.clientX -
            rect.left;


        const mouseY =
            e.clientY -
            rect.top;


        const imgWidth =
            mapImg.naturalWidth;


        const imgHeight =
            mapImg.naturalHeight;


        if (
            !imgWidth ||
            !imgHeight
        ) {

            if (coordDisplay) {
                coordDisplay.innerText =
                    '';
            }


            lastCoords =
                null;


            return;
        }


        const imgX =
            (mouseX - posX) /
            zoom;


        const imgY =
            (mouseY - posY) /
            zoom;


        const percentX =
            (imgX / imgWidth) *
            100;


        const percentY =
            (imgY / imgHeight) *
            100;


        if (
            percentX >= 0 &&
            percentX <= 100 &&
            percentY >= 0 &&
            percentY <= 100
        ) {

            if (coordDisplay) {

                coordDisplay.innerText =
                    `X: ${percentX.toFixed(2)}  ` +
                    `Y: ${percentY.toFixed(2)}  ` +
                    `F: ${currentFloor}`;

            }


            lastCoords = {
                x: percentX,
                y: percentY,
                floor: currentFloor
            };

        }
        else {

            if (coordDisplay) {
                coordDisplay.innerText =
                    '';
            }


            lastCoords =
                null;

        }

    }
);

function changeFloor(
    direction
) {

    if (!selectedMap) {
        return;
    }


    const maxFloor =
        selectedMap.maps.length - 1;


    const newFloor =
        Math.max(
            0,
            Math.min(
                maxFloor,
                currentFloor + direction
            )
        );


    if (
        newFloor === currentFloor
    ) {
        return;
    }


    currentFloor =
        newFloor;


    loadMap();

}

function addButtonPress(
    button,
    callback
) {

    if (!button) {
        return;
    }


    button.addEventListener(
        'pointerdown',
        (e) => {

            e.preventDefault();

            callback();

        }
    );

}


addButtonPress(
    mapUpButton,
    () => changeFloor(1)
);


addButtonPress(
    mapDownButton,
    () => changeFloor(-1)
);


function updateFloorButtons() {

    if (!selectedMap) {
        return;
    }


    const maxFloor =
        selectedMap.maps.length - 1;


    if (mapUpButton) {

        mapUpButton.style.opacity =
            currentFloor >= maxFloor
                ? '0.3'
                : '1';

    }


    if (mapDownButton) {

        mapDownButton.style.opacity =
            currentFloor <= 0
                ? '0.3'
                : '1';

    }

}

if (craftingTables) {

    craftingTables.addEventListener(
        'click',
        (e) => {

            const image =
                e.target.closest(
                    '.crafting-table-info img'
                );


            if (!image) {
                return;
            }

            const table =
                image.closest(
                    '.crafting-table'
                );


            if (!table) {
                return;
            }

            const crafter =
                crafters.find(
                    crafter => {

                        const className =
                            tableClassMap[
                            crafter.name
                            ];

                        return (
                            className &&
                            table.classList.contains(
                                className
                            )
                        );

                    }
                );


            if (!crafter) {

                console.warn(
                    'Could not determine crafter from crafting table.'
                );

                return;
            }

            if (
                !selectedMap ||
                !selectedMap.craft
            ) {

                console.warn(
                    'The selected island has no craft locations.'
                );

                return;
            }


            const craft =
                selectedMap.craft.find(
                    craft =>
                        craft.name ===
                        crafter.name
                );


            if (!craft) {

                console.warn(
                    `No map location found for "${crafter.name}".`
                );

                return;
            }


            currentFloor =
                craft.floor;


            chestMap.style.display =
                'flex';


            loadMap(
                craft
            );

        }
    );

}

function startMap() {

    if (
        !islands ||
        islands.length === 0
    ) {
        return;
    }


    selectedMap =
        islands.find(
            island =>
                island.name ===
                'Drum Island'
        );


    if (!selectedMap) {

        console.error(
            'Drum Island was not found in islands.'
        );

        return;
    }


    const mapSelectImg =
        document.querySelector(
            '.map-select-img'
        );


    const islandName =
        document.querySelector(
            '.island-name'
        );


    if (mapSelectImg) {

        mapSelectImg.src =
            `Img/Maps/${selectedMap.name}.png`;

    }


    if (islandName) {

        islandName.textContent =
            selectedMap.name;

    }


    loadMap();


    updateFloorButtons();

}

const returnButton =
    document.querySelector('.rot-bt');


if (returnButton) {

    returnButton.addEventListener(
        'click',
        () => {

            window.location.replace(
                'index.html'
            );

        }
    );

}

const mapCloseButton =
    document.querySelector(
        '.map-close-bt'
    );


if (
    mapCloseButton &&
    chestMap
) {

    mapCloseButton.addEventListener(
        'pointerdown',
        (e) => {

            e.preventDefault();

            e.stopPropagation();


            chestMap.style.display =
                'none';

        }
    );

}

const patientSelectClose = document.querySelector('.patient-select-close');

if (patientSelectClose) {
    patientSelectClose.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        e.stopPropagation();

        patientSelectorBg.style.display = 'none';

        patientSearch.value = '';

        populatePatientList(
            patients
        );

        selectedBed = null;
    });
}

chestMap.addEventListener('click', () => {
    if (!lastCoords) return;

    console.log(`{ x: ${lastCoords.x.toFixed(2)}, y: ${lastCoords.y.toFixed(2)}, floor: ${lastCoords.floor} }`);
});

startMap();