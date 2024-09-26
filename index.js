document.querySelectorAll(".rating-numb > p").forEach((rate) => {
    rate.addEventListener("click", ()=> {
        rate.style.background = "white";
        rate.style.color = "black";

        const userRating = rate.innerHTML;
        //const userRating = rate.textContent;        
        sessionStorage.setItem("ratingToSend", userRating);
        const userClicked = true;
        if(userClicked){
            document.querySelector(".submit-btn > button").addEventListener("click", ()=> {
                window.location.href = "./html/thank-you.html";
            });
        }

        const otherRates = document.querySelectorAll(".rating-numb > p");
        otherRates.forEach((other)=> {
            if(other != rate){
                other.style.backgroundColor = "hsl(215, 20%, 23%)";
                other.style.color = "hsl(217, 12%, 63%)"; 

            }
        });

    });

});


