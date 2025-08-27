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

// calling btn function
const callingCoin = 20;
const callBtns = getClass('call-btn');
for(const callBtn of callBtns){
    callBtn.addEventListener('click', function(){
        const abalableCoin = getIdNumber('coin');
        if(abalableCoin < callingCoin){
            alert('আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।');
            return;
        }
        const totalCoin = abalableCoin - callingCoin;
        getId('coin').innerText = totalCoin;
        const cardConteiner = getId('history-conteinar');
        const title = callBtn.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
        const subtitle = callBtn.parentNode.parentNode.childNodes[3].childNodes[3].innerText;
        const callingNumber = callBtn.parentNode.parentNode.childNodes[3].childNodes[5].childNodes[1].innerText;
        let timeShow = new Date().toLocaleTimeString();
        alert(`Caliing ${subtitle} Service ${callingNumber}...`)
        const newElement = document.createElement('div');
        newElement.innerHTML = `<div class="hidtory-cart p-4 mt-2 bg-[#FAFAFA] rounded-lg flex justify-between items-center">
                                        <div>
                                            <h2 class="text-lg text-[#111111]">${title}</h2>
                                            <span class="text-lg text-[#5C5C5C]">${callingNumber}</span> 
                                        </div>
                                        <span class="text-lg text-[#111111]">${timeShow}</span>
                                    </div>`
        cardConteiner.appendChild(newElement);
    })
}


// copy btn function 
const copyBtns = getClass('copy-btn');
let copyCount = getIdNumber('copy') + 1;
for(const copyBtn of copyBtns){
    copyBtn.addEventListener('click', function(){
        const copyNumber = copyBtn.parentNode.parentNode.childNodes[3].childNodes[5].childNodes[1].innerText;
        navigator.clipboard.writeText(copyNumber);
        alert('নাম্বার কপি হয়েছে ' + copyNumber)
        getId('copy').innerText = heartCount ++;
    })
}

