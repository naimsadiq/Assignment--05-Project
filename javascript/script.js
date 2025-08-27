// code small korar jonno function 

function getIdNumber(id){
    const elementNumber = parseInt(document.getElementById(id).innerText);
    return elementNumber;
}

function getIdString(id){
    const elementString = document.getElementById(id).innerText;
    return elementString;
}

function getId(id){
    const element = document.getElementById(id);
    return element;
}

function getClass(className){
    const getClassName = document.getElementsByClassName(className);
    return getClassName;
}


// heart icon function 

let heartCount = getIdNumber('heart-icon') + 1;
const heartBtns = getClass('heart-icon-btn');
for(const btn of heartBtns){
    btn.addEventListener('click', function(){
    getId('heart-icon').innerText = heartCount ++;
})
};

