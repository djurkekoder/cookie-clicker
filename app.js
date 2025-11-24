const cookieCount = document.getElementById('cookie-count');
const cookie = document.querySelector('img');
const item1 = document.getElementById('menu-item-1');
const item2 = document.getElementById('menu-item-2');
const item3 = document.getElementById('menu-item-3');
const customAlert1 = document.getElementById('custom-alert-1');
const customAlertDouble2 = document.getElementById('custom-alert-double-2');
const customAlertTripple2 = document.getElementById('custom-alert-tripple-2');
const customAlertQuadruple2 = document.getElementById('custom-alert-quadruple-2');
const customAlert3 = document.getElementById('custom-alert-3');
const customAlert4 = document.getElementById('custom-alert-4');
const customAlert5 = document.getElementById('custom-alert-5');
const customAlertButtonYes1 = document.getElementById('alert-button-yes-1');
const customAlertButtonNo1 = document.getElementById('alert-button-no-1');
const customAlertButtonCloseDouble2 = document.getElementById('alert-button-close-double-2');
const customAlertButtonCloseTripple2 = document.getElementById('alert-button-close-tripple2');
const customAlertButtonCloseQuadruple2 = document.getElementById('alert-button-close-quadruple-2');
const customAlertButtonClose3 = document.getElementById('alert-button-close-3');
const customAlertButtonClose4 = document.getElementById('alert-button-close-4');
const customAlertButtonYes5 = document.getElementById('alert-button-yes-5');
const customAlertButtonNo5 = document.getElementById('alert-button-no-5');
const blurWhenAlert = document.getElementById('blur-when-alert');
let selectedMenuItem;
const maxClicks = 1000;
let i = 0;

// Alert 1
function showCustomAlert1 () {
    customAlert1.style.display = 'flex';
    blurWhenAlert.classList.add('active-filter-state');
}
function hideCustomAlert1 () {
    customAlert1.style.display = 'none';
    blurWhenAlert.classList.remove('active-filter-state');
}

// Alert 2
function showCustomAlertDouble2 () {
    customAlertDouble2.style.display = 'flex';
    blurWhenAlert.classList.add('active-filter-state');
}
function hideCustomAlertDouble2 () {
    customAlertDouble2.style.display = 'none';
    blurWhenAlert.classList.remove('active-filter-state');
}
function showCustomAlertTripple2 () {
    customAlertTripple2.style.display = 'flex';
    blurWhenAlert.classList.add('active-filter-state');
}
function hideCustomAlertTripple2 () {
    customAlertTripple2.style.display = 'none';
    blurWhenAlert.classList.remove('active-filter-state');
}
function showCustomAlertQuadruple2 () {
    customAlertQuadruple2.style.display = 'flex';
    blurWhenAlert.classList.add('active-filter-state');
}
function hideCustomAlertQuadruple2 () {
    customAlertQuadruple2.style.display = 'none';
    blurWhenAlert.classList.remove('active-filter-state');
}

// Alert 3
function showCustomAlert3 () {
    customAlert3.style.display = 'flex';
    blurWhenAlert.classList.add('active-filter-state');
}
function hideCustomAlert3 () {
    customAlert3.style.display = 'none';
    blurWhenAlert.classList.remove('active-filter-state');
}

// Alert 4
function showCustomAlert4 () {
    customAlert4.style.display = 'flex';
    blurWhenAlert.classList.add('active-filter-state');
}
function hideCustomAlert4 () {
    customAlert4.style.display = 'none';
    blurWhenAlert.classList.remove('active-filter-state');
}

// Alert 5
function showCustomAlert5 (){
    customAlert5.style.display = 'flex';
    blurWhenAlert.classList.add('active-filter-state');
}
function hideCustomAlert5 (){
    customAlert5.style.display = 'none';
    blurWhenAlert.classList.remove('active-filter-state');
}

cookie.onclick = function() {
    cookieCount.classList.add('pop');

    setTimeout(() =>{
        cookieCount.classList.remove('pop')
    }, 150);
    
    i++;
    cookieCount.innerHTML = i;

    if(i >= maxClicks){
        cookieCount.innerHTML = 'You Beat The Game! Congrats!';
        setTimeout(() => {
            showCustomAlert5()
        }, 1000);
        customAlertButtonYes5.onclick = function () {
            hideCustomAlert5();
            i = 0;
        }
        customAlertButtonNo5.onclick = function () {
            hideCustomAlert5();
        }
    }

    // Item 1 (Doule Click)
    item1.onclick = function(){
        if(selectedMenuItem === item1){
            showCustomAlert4();
            customAlertButtonClose4.onclick = function () {
                hideCustomAlert4();
            }
        }
        else if(selectedMenuItem === item2 || selectedMenuItem === item3){
            showCustomAlert1();
            customAlertButtonYes1.onclick = function () {
                selectedMenuItem = item1;
                cookie.onclick = function(){
                    i+=2;
                    cookieCount.innerHTML = i;
                }
                hideCustomAlert1();
            }
            customAlertButtonNo1.onclick = function() {{
                        selectedMenuItem = item3;
                        hideCustomAlert1();
                    }
                }
            }
        else if(i < 100){
            showCustomAlert3();
            customAlertButtonClose3.onclick = function () {
                hideCustomAlert3();
            }
        }
        else{
            showCustomAlertDouble2();
            customAlertButtonCloseDouble2.onclick = function () {
                hideCustomAlertDouble2();
            }
            i = i - 100;
            cookieCount.innerHTML = i;
            selectedMenuItem = item1;
            cookie.onclick = function(){
                i+=2;
                cookieCount.innerHTML = i;
            }
        }
    };

    // Item 2 (Tripple Click)
    item2.onclick = function(){
        if(selectedMenuItem === item2){
            showCustomAlert4();
            customAlertButtonClose4.onclick = function () {
                hideCustomAlert4();
            }
        }
        else if(i < 250){
            showCustomAlert3();
            customAlertButtonClose3.onclick = function () {
                hideCustomAlert3();
            }
        }
        else if(selectedMenuItem === item3){
            showCustomAlert1();
            customAlertButtonYes1.onclick = function () {
                selectedMenuItem = item2;
                cookie.onclick = function(){
                    i+=3;
                    cookieCount.innerHTML = i;
                }
                hideCustomAlert1();
            }
            customAlertButtonNo1.onclick = function() {{
                        selectedMenuItem = item3;
                        hideCustomAlert1();
                    }
                }
            }
        else{
            showCustomAlertTripple2();
            customAlertButtonCloseTripple2.onclick = function () {
                hideCustomAlertTripple2();
            }
            i = i - 250;
            cookieCount.innerHTML = i;
            selectedMenuItem = item2;
            cookie.onclick = function(){
                i+=3;
                cookieCount.innerHTML = i;
            }
        }
    };

    // Item 3 (Quadruple Click)
    item3.onclick = function(){
        if(selectedMenuItem === item3){
            showCustomAlert4();
            customAlertButtonClose4.onclick = function () {
                    hideCustomAlert4();
                }   
        }
        else if(i < 500){
            showCustomAlert3();
            customAlertButtonClose3.onclick = function () {
                hideCustomAlert3();
            }
        }
        else{
            showCustomAlertQuadruple2();
            customAlertButtonCloseQuadruple2.onclick = function () {
                hideCustomAlertQuadruple2();
            }
            i = i - 500;
            cookieCount.innerHTML = i;
            selectedMenuItem = item3;
            cookie.onclick = function(){
                i+=4;
                cookieCount.innerHTML = i;
            }
        } 
    };
}

