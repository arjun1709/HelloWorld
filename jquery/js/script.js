$(document).ready(function() {

    $.get(
      "https://api.cryptowat.ch", {
      Price: 'asks',
      Amount: 'bids'},
      function(data) {

        $.each(data.items, function(i, result){

          console.log(result);

        })

      }
    );

});
