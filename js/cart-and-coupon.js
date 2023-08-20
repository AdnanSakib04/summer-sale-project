function addToTotal(target) {
   
    
    console.log(target.parentNode.childNodes[1].childNodes[3].childNodes);
    
    const nameOfItem = target.parentNode.childNodes[1].childNodes[3].childNodes[3].innerText
    const priceOfItemString = target.parentNode.childNodes[1].childNodes[3].childNodes[5].innerText.split(" ")[0];
    const priceOfItem = parseFloat(priceOfItemString);
    console.log(nameOfItem, priceOfItem);

    // get the previous total price without discount
    const totalPriceElement = document.getElementById('total-price');
    const previousTotalPriceString = totalPriceElement.innerText;
    const previousTotalPrice = parseFloat(previousTotalPriceString);


    // get the previous total price with discount
    const totalElement = document.getElementById('total')
    //const previousTotalString = totalElement.innerText;
    //const previousTotal = parseFloat(previousTotalString);

    const discountElement = document.getElementById('discount');
    const discountString = discountElement.innerText;
    const discount = parseFloat(discountString);


    const newTotalPrice = (previousTotalPrice + priceOfItem).toFixed(2);
    const newTotal = (newTotalPrice - discount).toFixed(2);

    //set the total price without discount
    totalPriceElement.innerText = newTotalPrice;


    //set the total price with discount
    totalElement.innerText = newTotal;

    
    checkApplyAndPurchaseButton(newTotalPrice);

    //set the name of the product 
    const olElement = document.getElementById('order-list');
    const li = document.createElement('li');
    li.innerText = nameOfItem;
    olElement.appendChild(li);

}

function checkApplyAndPurchaseButton(newTotalPrice){
    if(newTotalPrice>0)
    {
        document.getElementById('btn-purchase').removeAttribute('disabled');
    }
    if(newTotalPrice>=200)
    {
        document.getElementById('btn-apply').removeAttribute('disabled');
    }

}


    

function discount() {

    const couponCode = document.getElementById('coupon-field').value;
    if (couponCode != 'SELL200') {
    alert('Invalid coupon');
    }
    else{

        // get the previous total price without discount
        const totalPriceElement = document.getElementById('total-price');
        const previousTotalPriceString = totalPriceElement.innerText;
        const previousTotalPrice = parseFloat(previousTotalPriceString);

        const discountAmount = (previousTotalPrice * .20).toFixed(2);
        const discountElement = document.getElementById('discount');
        discountElement.innerText = discountAmount;

        const newTotal = (previousTotalPrice - discountAmount).toFixed(2);
        const totalElement = document.getElementById('total')
        totalElement.innerText = newTotal;
    }
    }

    function goHome(){
        location.href = "index.html";
    }