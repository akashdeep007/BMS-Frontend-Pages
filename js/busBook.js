

    const seatsInput = document.querySelector('#seats');
    const fareInput = document.querySelector('#totalFare');
    const maximum = parseInt(seatsInput.max);
    const minimum = parseInt(seatsInput.min);
    const dist_km = 40;
    const farePerKm = 3;
    fareInput.value = dist_km*farePerKm*parseInt(seatsInput.value);
    
    seatsInput.addEventListener('input', () => {
        // console.log(seatsInput.value);
        let noOfSeats = parseInt(seatsInput.value);
        if(!noOfSeats && noOfSeats!==0){
            fareInput.value = '';
            printSuccess("seatError");
        }else if(noOfSeats>maximum){
            // console.log(">6");
            fareInput.value = '';
            printError("seatError", `Seats should be lesser than or equal to ${maximum}`);
        }else if(noOfSeats<minimum){
            // console.log("<1");
            fareInput.value = '';
            printError("seatError", `Seats should be greater than or equal to ${minimum}`);
        }
        else if(noOfSeats>=minimum && noOfSeats<=maximum){
            totalFare = dist_km*farePerKm*parseInt(seatsInput.value);
            fareInput.value =  totalFare;
            printSuccess("seatError");
        }
    });

    function printError(elemId, hintMsg) {
        document.getElementById(elemId).innerHTML = hintMsg;
        document.getElementById(elemId).parentElement.classList.add('errorcolor');
    }

    function printSuccess(elemId) {
        document.getElementById(elemId).innerHTML = '';
        document.getElementById(elemId).parentElement.classList.remove('errorcolor');
    }