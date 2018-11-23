document.addEventListener("DOMContentLoaded", function() {
    console.log("Hello");
    
    function update_bitcoin_data() {
        var bitcoin_url = "https://api.coindesk.com/v1/bpi/currentprice.json";
        var XHR = new XMLHttpRequest();

        XHR.open("GET", bitcoin_url);
        XHR.send();

        XHR.onreadystatechange = function() {
            if (XHR.status === 200 && XHR.readyState === 4) {
                var bitcoin_res = JSON.parse(XHR.responseText)
                console.log(bitcoin_res.bpi);
                var price_elem = document.getElementById("price_collected");
                price_elem.textContent = bitcoin_res.bpi.EUR.rate;
            } else {
                console.log("Something went wrong!");
            }
        };
    };
   
    
    document.getElementById("refresh").addEventListener("click", function(){
        update_bitcoin_data();
    })
});