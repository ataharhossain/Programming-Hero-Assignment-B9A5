let totalSeat = 40;
let selectedSeat = 0;
let totalPrice = 0;
let availableSeat = 4;
let discountPrice = 0;
const customerSelected = [];
let seatDiv= document.getElementById('classKBD');
const seats = document.querySelectorAll('.seatlist');
for(let i = 0; i < seats.length; i++) {
    const seat = seats[i];
    seat.addEventListener('click', function(event){
        if(availableSeat <= 0){
            alert("You Can't Buy all The seat IDIOT !!");
            return;
        }
        if(customerSelected.includes(seat.innerText))
        {
            alert("This ticket on sell");
            return;
        }
        else{
            customerSelected.push(seat.innerText);
        }
    const update = document.getElementById('push-seat-details');
    const mainDiv = document.createElement("div");
    const seatDiv = document.createElement("div");
    const classDiv = document.createElement("div");
    const priceDiv = document.createElement("div");

    seatDiv.innerText = seat.innerText;
    classDiv.innerText = "Economy";
    priceDiv.innerText = "550";
    mainDiv.appendChild(seatDiv);
    mainDiv.appendChild(classDiv);
    mainDiv.appendChild(priceDiv);
        mainDiv.classList.add("flex");
        mainDiv.classList.add("justify-between");
    update.appendChild(mainDiv);
    setValue('total-seat', --totalSeat);
    setValue('selected-seat', ++selectedSeat);
    setBackGround(seat.innerText);
    totalPrice = totalPrice + 550;
    setValue("total-price", totalPrice);
    setValue("grand-total", totalPrice);

        availableSeat--;
    })
}
function validCoupon() {
    const val1 = document.getElementById('input-field');
    const val =val1.value;
    console.log("val",  val);
    if(val === "NEW15" || val === "Couple 20"){
        if(val === "NEW15") {
            discountPrice = totalPrice * 0.15;
        }
        else {   
      discountPrice = totalPrice * 0.20;
    }
    }
    else {
        alert("Wrong Coupon");
        document.getElementById("input-field").value= "";
        return;
    }
    let grandValue = totalPrice - discountPrice;
    setValue("grand-total", grandValue);
    document.getElementById('coupon').classList.add('hidden');


}