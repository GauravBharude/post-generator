var quotes = [
    

   
 '“Never regret anything that made you smile.” – Mark Twain',


  

  '“Doubt kills more dreams than failure ever will.” – Suzy Kassem'
    


 

]; 

function generate() {   
 var genQuote = quotes[Math.floor(Math.random() * quotes.length)];
  var quote = genQuote.split('–');
  document.getElementById('quote').innerHTML = quote[0];
 document.getElementById('game').innerHTML = quote[1];                  
}

// “” //

//3,4 remaining //

//color: white;text-shadow: 1px 1px 2px black, 0 0 25px rgb(0, 0, 0), 0 0 50px rgb(0, 0, 0) ,0 0 100px rgb(0, 0, 0);
  //
