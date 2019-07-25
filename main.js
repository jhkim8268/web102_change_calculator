// Write your JavaScript here
// var sale = document.getElementById('amount-due').value;
// var receive = document.getElementById('amount-received').value;
// var change = (receive - sale).toFixed(2);

// let dollars = Math.floor((change - change % 1).toFixed(2));
//     var twentyDollars = Math.floor(dollars / 20);
//     var tenDollars = Math.floor((dollars - twentyDollars*20)/10);
//     var fiveDollars = Math.floor((dollars - twentyDollars*20 - tenDollars*10)/5); 
//     var twoDollars = Math.floor((dollars - twentyDollars*20 - tenDollars*10 - fiveDollars*5)/2);
//     var oneDollars = Math.floor((dollars - twentyDollars*20 - tenDollars*10 - fiveDollars*5 - twoDollars*2));
// let cents = (change - dollars).toFixed(2)*100;
//     var quaters = Math.floor(((change - dollars).toFixed(2))/0.25);
//     var dimes = Math.floor((change - dollars - quaters*0.25).toFixed(2)*10);
//     var nickels = Math.floor(((change - dollars - quaters*0.25 - dimes*0.1).toFixed(2))/0.05);
//     var pennies = (change - dollars - quaters*0.25 - dimes*0.1 - nickels*0.05).toFixed(2)*100;

    
function calculation(){
    var sale = document.getElementById('amount-due').value;
    var receive = document.getElementById('amount-received').value;
    var change = (receive - sale).toFixed(2);

    let dollars = Math.floor(change - change % 1);
        var twentyDollars = Math.floor(dollars / 20);
        var tenDollars = Math.floor((dollars - twentyDollars*20)/10);
        var fiveDollars = Math.floor((dollars - twentyDollars*20 - tenDollars*10)/5); 
        var twoDollars = Math.floor((dollars - twentyDollars*20 - tenDollars*10 - fiveDollars*5)/2);
        var oneDollars = Math.floor((dollars - twentyDollars*20 - tenDollars*10 - fiveDollars*5 - twoDollars*2));
    let cents = (change - dollars).toFixed(2)*100;
        var quaters = Math.floor(((change - dollars).toFixed(2))/0.25);
        var dimes = Math.floor((change - dollars - quaters*0.25).toFixed(2)*10);
        var nickels = Math.floor(((change - dollars - quaters*0.25 - dimes*0.1).toFixed(2))/0.05);
        var pennies = (change - dollars - quaters*0.25 - dimes*0.1 - nickels*0.05).toFixed(2)*100;
    
    document.getElementById('dollars-output').innerText = dollars;
        document.getElementById('twentyDollars-output').innerText = twentyDollars;
        document.getElementById('tenDollars-output').innerText = tenDollars;
        document.getElementById('fiveDollars-output').innerText = fiveDollars;
        document.getElementById('twoDollars-output').innerText = twoDollars;
        document.getElementById('oneDollars-output').innerText = oneDollars;
    document.getElementById('cents').innerText = cents;
        document.getElementById('quarters-output').innerText = quaters;
        document.getElementById('dimes-output').innerText = dimes;
        document.getElementById('nickels-output').innerText = nickels;
        document.getElementById('pennies-output').innerText = pennies;
}; 