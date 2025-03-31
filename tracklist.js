const list = document.querySelector('#list');
const listMobile = document.querySelector('#header-mobile');

var storedAccounts = localStorage.getItem('accounts');
var accounts = storedAccounts ? JSON.parse(storedAccounts) : [];

var selectedAccountMobile = accounts[0] || undefined;

let calendarOpen = false;
let selectedAccount = undefined;

document.querySelector('.account-left').addEventListener('click', () => {
    const mobileAccountIndex = accounts.findIndex(account => account.name === selectedAccountMobile.name);
    if (mobileAccountIndex > 0) {
        selectedAccountMobile = accounts[mobileAccountIndex - 1];
        populateList(accounts, true);
    }
})

document.querySelector('.account-right').addEventListener('click', () => {
    const mobileAccountIndex = accounts.findIndex(account => account.name === selectedAccountMobile.name);
    if (mobileAccountIndex < (accounts.length - 1)) {
        selectedAccountMobile = accounts[mobileAccountIndex + 1];
        populateList(accounts, true);
    }
})

const eventOn = { isOn: false, start: new Date('2024-11-15'), end: new Date('2024-11-29') };

const handleResize = () => {
    const width = window.innerWidth;
    if (width < 601) {
        populateList(accounts, true);
    } else {
        populateList(accounts, false);
    }
}

window.addEventListener('resize', handleResize)

if (accounts[0] !== undefined) {
    if (accounts[0].coliseum === undefined) {
        accounts.forEach(account => {
            account.coliseum = [false, false];
        });
        saveAccounts();
    }
    if (accounts[0].event === undefined) {
        accounts.forEach(account => {
            account.event = { days: [false, false, false, false, false, false, false, false, false, false, false, false, false, false] };
        });
        saveAccounts();
    }
}

if (eventOn.isOn === false) {
    accounts.forEach(account => account.event = { days: [false, false, false, false, false, false, false, false, false, false, false, false, false, false] });
    saveAccounts();
}

function populateList(accountsList, mobile) {
    list.innerHTML = '';
    listMobile.querySelectorAll('.listMobileItem').forEach(div => div.innerHTML = '');

    var listToPopulate = mobile ? [selectedAccountMobile] : accountsList;

    listToPopulate.forEach(account => {
        const listItemDiv = document.createElement('div');
        listItemDiv.className = 'list-item-div';

        const accountDiv = document.createElement('div');
        accountDiv.className = 'list-item account';
        const accountName = document.createElement('p');
        accountName.id = 'account-name';
        accountName.textContent = account.name;
        accountDiv.appendChild(accountName);

        const raidDiv = document.createElement('div');
        raidDiv.className = 'list-item';
        const raidCheckbox = document.createElement('input');
        raidCheckbox.classList.add('checkbox');
        raidCheckbox.type = 'checkbox';
        raidCheckbox.id = 'raid';
        raidCheckbox.checked = account.raid;
        raidDiv.appendChild(raidCheckbox);
        raidCheckbox.addEventListener('change', () => {
            account.raid = raidCheckbox.checked;
            saveAccounts();
        })

        const wantedDiv = document.createElement('div');
        wantedDiv.className = 'list-item';
        const wantedDown = document.createElement('div');
        wantedDown.className = 'number-bt wantedDown';
        wantedDown.innerHTML = '<span class="material-symbols-outlined">arrow_drop_down</span>';
        wantedDown.addEventListener('click', () => {
            if (account.wanted > 0) {
                account.wanted -= 2;
                setWidth(account.wanted, wantedSliderFilled);
                setNumber(account.wanted, wantedNumber, 30);
                saveAccounts();
            }
        });
        wantedDiv.appendChild(wantedDown);

        const wantedSlider = document.createElement('div');
        wantedSlider.className = 'wanted-slider';
        const wantedSliderFilled = document.createElement('div');
        wantedSliderFilled.className = 'wanted-slider-filled';
        setWidth(account.wanted, wantedSliderFilled);

        const wantedNumber = document.createElement('p');
        wantedNumber.className = 'wanted-number';
        wantedNumber.textContent = `${account.wanted}/30`;
        wantedSlider.appendChild(wantedNumber);
        wantedSlider.appendChild(wantedSliderFilled);
        wantedDiv.appendChild(wantedSlider);

        const wantedUp = document.createElement('div');
        wantedUp.className = 'number-bt wantedUp';
        wantedUp.innerHTML = '<span class="material-symbols-outlined">arrow_drop_up</span>';
        wantedUp.addEventListener('click', () => {
            if (account.wanted < 30) {
                account.wanted += 2;
                setWidth(account.wanted, wantedSliderFilled);
                setNumber(account.wanted, wantedNumber, 30);
                saveAccounts();
            }
        });
        wantedDiv.appendChild(wantedUp);

        const bossDiv = document.createElement('div');
        bossDiv.className = 'list-item';
        const bossDown = document.createElement('div');
        bossDown.className = 'number-bt bossDown';
        bossDown.innerHTML = '<span class="material-symbols-outlined">arrow_drop_down</span>';
        bossDown.addEventListener('click', () => {
            if (account.boss > 0) {
                account.boss -= 1;
                setWidth(account.boss, bossSliderFilled);
                setNumber(account.boss, bossNumber, 11);
                saveAccounts();
            }
        });
        bossDiv.appendChild(bossDown);

        const bossSlider = document.createElement('div');
        bossSlider.className = 'boss-slider';
        const bossSliderFilled = document.createElement('div');
        bossSliderFilled.className = 'boss-slider-filled';
        setWidth(account.boss, bossSliderFilled);

        const bossNumber = document.createElement('p');
        bossNumber.className = 'boss-number';
        bossNumber.textContent = `${account.boss}/11`;
        bossSlider.appendChild(bossNumber);
        bossSlider.appendChild(bossSliderFilled);
        bossDiv.appendChild(bossSlider);

        const bossUp = document.createElement('div');
        bossUp.className = 'number-bt bossUp';
        bossUp.innerHTML = '<span class="material-symbols-outlined">arrow_drop_up</span>';
        bossUp.addEventListener('click', () => {
            if (account.boss < 11) {
                account.boss += 1;
                setWidth(account.boss, bossSliderFilled);
                setNumber(account.boss, bossNumber, 11);
                saveAccounts();
            }
        });
        bossDiv.appendChild(bossUp);

        const proveDiv = document.createElement('div');
        proveDiv.className = 'list-item';
        const proveDown = document.createElement('div');
        proveDown.className = 'number-bt proveDown';
        proveDown.innerHTML = '<span class="material-symbols-outlined">arrow_drop_down</span>';
        proveDown.addEventListener('click', () => {
            if (account.prove > 0) {
                account.prove -= 1;
                setWidth(account.prove, proveSliderFilled);
                setNumber(account.prove, proveNumber, 8);
                saveAccounts();
            }
        });
        proveDiv.appendChild(proveDown);

        const proveSlider = document.createElement('div');
        proveSlider.className = 'prove-slider';
        const proveSliderFilled = document.createElement('div');
        proveSliderFilled.className = 'prove-slider-filled';
        setWidth(account.prove, proveSliderFilled);

        const proveNumber = document.createElement('p');
        proveNumber.className = 'prove-number';
        proveNumber.textContent = `${account.prove}/8`;
        proveSlider.appendChild(proveNumber);
        proveSlider.appendChild(proveSliderFilled);
        proveDiv.appendChild(proveSlider);

        const proveUp = document.createElement('div');
        proveUp.className = 'number-bt proveUp';
        proveUp.innerHTML = '<span class="material-symbols-outlined">arrow_drop_up</span>';
        proveUp.addEventListener('click', () => {
            if (account.prove < 8) {
                account.prove += 1;
                setWidth(account.prove, proveSliderFilled);
                setNumber(account.prove, proveNumber, 8);
                saveAccounts();
            }
        });
        proveDiv.appendChild(proveUp);

        const globalDiv = document.createElement('div');
        globalDiv.className = 'list-item';

        const globalItems = ['Quiz', 'Count', 'Race', 'Memory', 'Deathmatch'];
        globalItems.forEach((item, index) => {
            const globalItemDiv = document.createElement('div');
            globalItemDiv.className = `global-item`;
            const img = document.createElement('img');
            img.src = `Img/Items/${item}.png`;
            globalItemDiv.appendChild(img);
            const checkbox = document.createElement('input');
            checkbox.classList.add('checkbox');
            checkbox.type = 'checkbox';
            checkbox.id = item.toLowerCase();
            checkbox.checked = account.global[index];
            checkbox.addEventListener('change', () => {
                account.global[index] = checkbox.checked;
                saveAccounts();
            })
            globalItemDiv.appendChild(checkbox);
            globalDiv.appendChild(globalItemDiv);
        });

        const coliseumDiv = document.createElement('div');
        coliseumDiv.className = 'list-item coliseum';

        const coliseumItems = ['Coliseum', 'One Man Army'];
        coliseumItems.forEach((item, index) => {
            const coliseumItemDiv = document.createElement('div');
            coliseumItemDiv.className = 'coliseum-item';
            const img = document.createElement('div');
            if (index === 0) {
                img.innerHTML = `<span class="material-symbols-outlined">groups</span>`
            } else {
                img.innerHTML = `<span class="material-symbols-outlined">person</span>`
            }
            coliseumItemDiv.appendChild(img);
            const checkbox = document.createElement('input');
            checkbox.classList.add('checkbox');
            checkbox.type = 'checkbox';
            checkbox.id = item.toLowerCase();
            checkbox.checked = account.coliseum[index];
            checkbox.addEventListener('change', () => {
                account.coliseum[index] = checkbox.checked;
                saveAccounts();
            })
            coliseumItemDiv.appendChild(checkbox);
            coliseumDiv.appendChild(coliseumItemDiv);
        });

        const options = document.createElement('div');
        options.className = 'options';

        const deleteBt = document.createElement('div');
        deleteBt.className = 'delete-bt';
        deleteBt.innerHTML = '<p>-</p>';

        const upBt = document.createElement('div');
        upBt.className = 'updown-bt';
        upBt.innerHTML = '<span class="material-symbols-outlined">keyboard_arrow_up</span>';

        const downBt = document.createElement('div');
        downBt.className = 'updown-bt';
        downBt.innerHTML = '<span class="material-symbols-outlined">keyboard_arrow_down</span>';

        options.appendChild(deleteBt);
        options.appendChild(upBt);
        options.appendChild(downBt);

        deleteBt.addEventListener('click', () => {
            const index = accounts.findIndex(e => e.name === account.name);
            if (index !== -1) {
                accounts.splice(index, 1);
                saveAccounts();
                populateList(accounts);
            }
        });

        upBt.addEventListener('click', () => {
            const index = accounts.findIndex(e => e.name === account.name);
            if (index > 0) {
                [accounts[index], accounts[index - 1]] = [accounts[index - 1], accounts[index]];
                saveAccounts();
                populateList(accounts);
            }
        });

        downBt.addEventListener('click', () => {
            const index = accounts.findIndex(e => e.name === account.name);
            if (index < accounts.length - 1) {
                [accounts[index], accounts[index + 1]] = [accounts[index + 1], accounts[index]];
                saveAccounts();
                populateList(accounts);
            }
        });

        const eventDiv = document.createElement('div');
        eventDiv.className = 'list-item event';
        const calendarButton = document.createElement('div');
        calendarButton.className = 'calendar-bt';
        calendarButton.innerHTML = '<span class="material-symbols-outlined">calendar_month</span>';
        eventDiv.appendChild(calendarButton);
        calendarButton.addEventListener('click', () => {
            if (calendarOpen) {
                calendarOpen = false;
                document.querySelector('.event-modal').style.display = 'none';
            } else {
                const buttonRect = calendarButton.getBoundingClientRect();
                calendarOpen = true;
                selectedAccount = account;
                renderCalendar();
                const modal = document.querySelector('.event-modal');
                modal.style.display = 'flex';
                modal.style.top = `${buttonRect.bottom}px`;
                modal.style.left = `${buttonRect.left}px`;
                modal.style.translate = '-100% 0';
            }
        });

        listItemDiv.appendChild(options);
        listItemDiv.appendChild(accountDiv);
        listMobile.querySelector('.account-mobile').appendChild(accountDiv.cloneNode(true));
        listItemDiv.appendChild(raidDiv);
        const raidClone = raidDiv.cloneNode(true);
        listMobile.querySelector('.raid-mobile').appendChild(raidClone);
        raidClone.querySelector('#raid').addEventListener('change', () => {
            account.raid = raidClone.querySelector('#raid').checked;
            saveAccounts();
        })

        listItemDiv.appendChild(wantedDiv);
        const wantedClone = wantedDiv.cloneNode(true)
        listMobile.querySelector('.wanted-mobile').appendChild(wantedClone);
        wantedClone.querySelector('.wantedDown').addEventListener('click', () => {
            if (account.wanted > 0) {
                account.wanted -= 2;
                setWidth(account.wanted, wantedClone.querySelector('.wanted-slider-filled'));
                setNumber(account.wanted, wantedClone.querySelector('.wanted-number'), 30);
                saveAccounts();
            }
        });
        wantedClone.querySelector('.wantedUp').addEventListener('click', () => {
            if (account.wanted < 30) {
                account.wanted += 2;
                setWidth(account.wanted, wantedClone.querySelector('.wanted-slider-filled'));
                setNumber(account.wanted, wantedClone.querySelector('.wanted-number'), 30);
                saveAccounts();
            }
        });

        listItemDiv.appendChild(bossDiv);
        const bossClone = bossDiv.cloneNode(true)
        listMobile.querySelector('.boss-mobile').appendChild(bossClone);
        bossClone.querySelector('.bossDown').addEventListener('click', () => {
            if (account.boss > 0) {
                account.boss -= 1;
                setWidth(account.boss, bossClone.querySelector('.boss-slider-filled'));
                setNumber(account.boss, bossClone.querySelector('.boss-number'), 11);
                saveAccounts();
            }
        });
        bossClone.querySelector('.bossUp').addEventListener('click', () => {
            if (account.boss < 11) {
                account.boss += 1;
                setWidth(account.boss, bossClone.querySelector('.boss-slider-filled'));
                setNumber(account.boss, bossClone.querySelector('.boss-number'), 11);
                saveAccounts();
            }
        });

        listItemDiv.appendChild(proveDiv);
        const proveClone = proveDiv.cloneNode(true)
        listMobile.querySelector('.prove-mobile').appendChild(proveClone);
        proveClone.querySelector('.proveDown').addEventListener('click', () => {
            if (account.prove > 0) {
                account.prove -= 1;
                setWidth(account.prove, proveClone.querySelector('.prove-slider-filled'));
                setNumber(account.prove, proveClone.querySelector('.prove-number'), 8);
                saveAccounts();
            }
        });
        proveClone.querySelector('.proveUp').addEventListener('click', () => {
            if (account.prove < 8) {
                account.prove += 1;
                setWidth(account.prove, proveClone.querySelector('.prove-slider-filled'));
                setNumber(account.prove, proveClone.querySelector('.prove-number'), 8);
                saveAccounts();
            }
        });

        listItemDiv.appendChild(globalDiv);
        const globalClone = globalDiv.cloneNode(true);
        listMobile.querySelector('.global-mobile').appendChild(globalClone);
        document.querySelectorAll('.global-item').forEach((item, index) => {
            item.querySelector('.checkbox').addEventListener('change', () => {
                account.global[index] = item.querySelector('.checkbox').checked;
                saveAccounts();
            })
        })

        listItemDiv.appendChild(coliseumDiv);
        const coliseumClone = coliseumDiv.cloneNode(true);
        listMobile.querySelector('.coliseum-mobile').appendChild(coliseumClone);
        document.querySelectorAll('.coliseum-item').forEach((item, index) => {
            item.querySelector('.checkbox').addEventListener('change', () => {
                account.coliseum[index] = item.querySelector('.checkbox').checked;
                saveAccounts();
            })
        })

        listItemDiv.appendChild(eventDiv);
        const eventClone = eventDiv.cloneNode(true);
        listMobile.querySelector('.event-mobile').appendChild(eventClone);
        eventClone.querySelector('.calendar-bt').addEventListener('click', () => {
            if (calendarOpen) {
                calendarOpen = false;
                document.querySelector('.event-modal').style.display = 'none';
            } else {
                const buttonRect = eventClone.querySelector('.calendar-bt').getBoundingClientRect();
                calendarOpen = true;
                selectedAccount = account;
                renderCalendar();
                const modal = document.querySelector('.event-modal');
                modal.style.display = 'flex';
                modal.style.top = `${buttonRect.bottom}px`;
                modal.style.left = `${buttonRect.left}px`;
                modal.style.translate = '-42% -123%';
            }
        });



        list.appendChild(listItemDiv);
    });
}

function setWidth(number, div) {
    div.style.width = `${number * 8}px`
}

function setNumber(number, p, max) {
    p.innerHTML = `${number}/${max}`;
}

function saveAccounts() {
    if (selectedAccount) {
        accounts[accounts.indexOf(selectedAccount)] = selectedAccount;
    }
    localStorage.setItem('accounts', JSON.stringify(accounts));
}

if(accounts.length > 0){
    if (window.innerWidth < 601) {
        populateList(accounts, true);
    } else {
        populateList(accounts);
    }
}

document.querySelector('#add-bt').addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    modal.style.display = 'flex';
})

document.querySelector('#save-bt').addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    const input = document.querySelector('#modal-input');
    if (accounts.find(account => account.name === input.value) === undefined) {
        accounts.push({ name: input.value, raid: false, wanted: 0, boss: 0, prove: 0, global: [false, false, false, false, false], coliseum: [false, false], event: { days: [false, false, false, false, false, false, false, false, false, false, false, false, false, false] } });
        input.value = '';
        saveAccounts();
        if(selectedAccountMobile === undefined){
            selectedAccountMobile = accounts[0]
        }
        if (window.innerWidth < 601) {
            populateList(accounts, true);
        } else {
            populateList(accounts, false);
        }
        modal.style.display = 'none';
    } else {
        alert("Não use o mesmo nome em mais de uma conta.")
    }
})

document.querySelector('#reset-bt').addEventListener('click', () => {
    accounts.forEach(account => {
        account.raid = false;
        account.wanted = 0;
        account.boss = 0;
        account.prove = 0;
        account.global = [false, false, false, false, false];
        account.coliseum = [false, false];
    });
    if (window.innerWidth < 601) {
        populateList(accounts, true);
    } else {
        populateList(accounts, false);
    }
    saveAccounts();
})

document.querySelector('#back-bt').addEventListener('click', () => {
    window.location.replace('index.html');
})

const startDate = new Date(eventOn.start);
const endDate = new Date(eventOn.end);
let currentDate = new Date(startDate);
const prevButton = document.getElementById('prev-month');
const nextButton = document.getElementById('next-month');

function updateButtonState() {
    const isStartMonth = currentDate.getFullYear() === startDate.getFullYear() &&
        currentDate.getMonth() === startDate.getMonth();
    const isEndMonth = currentDate.getFullYear() === endDate.getFullYear() &&
        currentDate.getMonth() === endDate.getMonth();

    prevButton.disabled = isStartMonth;
    nextButton.disabled = isEndMonth;

    if (isStartMonth) {
        prevButton.classList.remove('active');
    } else {
        prevButton.classList.add('active');
    }
    if (isEndMonth) {
        nextButton.classList.remove('active');
    } else {
        nextButton.classList.add('active');
    }
}

const totalEventDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;

function renderCalendar() {
    let daysChecked = selectedAccount ? selectedAccount.event.days : Array(totalEventDays).fill(false);
    const calendarElement = document.getElementById('calendar');
    const monthNameElement = document.getElementById('month-name');
    calendarElement.innerHTML = '';
    monthNameElement.textContent = eventOn.isOn ? currentDate.toLocaleString('default', { month: 'long' }) : 'Nenhum Evento';

    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const totalDays = lastDay.getDate();

    for (let i = 1; i <= totalDays; i++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.classList.add(i);
        dayElement.textContent = i;

        const dayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);

        if (eventOn.isOn) {
            if (dayDate < startDate || dayDate > endDate) {
                dayElement.style.opacity = '0.5';
                dayElement.style.pointerEvents = 'none';
            } else {
                const dayIndex = Math.floor((dayDate - startDate) / (1000 * 60 * 60 * 24));
                dayElement.style.opacity = '1';
                dayElement.style.pointerEvents = 'auto';

                if (daysChecked[dayIndex]) {
                    dayElement.classList.add('active');
                }

                dayElement.addEventListener('click', () => {
                    dayElement.classList.toggle('active');
                    daysChecked[dayIndex] = !daysChecked[dayIndex];
                    selectedAccount.event.days = daysChecked;
                    saveAccounts();
                });
            }
            calendarElement.appendChild(dayElement);
        }
    }
    updateButtonState();
}

prevButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(selectedAccount);
});

nextButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(selectedAccount);
});
