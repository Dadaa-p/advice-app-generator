
const advice_num = document.querySelector('.advice-num');
const advice_txt = document.querySelector('.advice-txt p');
const dice = document.querySelector('.dice');
dice.addEventListener("click",generateAdvice);

async function generateAdvice() {
    const ad = await fetch('https://api.adviceslip.com/advice',{
        headers:{
            'Accept':'application/json'
        }
    });

    const advice = await ad.json();
    advice_num.innerHTML = advice.slip.id;
    advice_txt.innerHTML = `"${advice.slip.advice}"`;
}



    