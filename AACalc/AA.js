/* To-Do List: 
Add more recipes
Organize, categorize, recipes with a way to easily find them
Scale size down, create a tidy card-like grid layout with all boxes.
Add a proficiency multiplier
trade pack calculator?
*/














console.log("Script Loaded");

// Hereafter Stones
$('input').keyup(function(){ // run anytime the value changes
    var firstValue  = Number($('#first').val());   // get value of field
    var secondValue = Number($('#second').val()); // convert it to a float
    var hereAfterPrice  = Number($('#hereAfterPrice').val())*10;
    var fourthValue = Number($('#fourth').val());

    $('#total_expenses1').html(hereAfterPrice - (firstValue + secondValue * 6)) ; // add them and output it
    $('#total_expenses2').html((hereAfterPrice - (firstValue + secondValue * 6)) / 30) ; // add them and output it

// add them and output it
});


// Ground SpicesP
$('input').keyup(function(){ // run anytime the value changes
    var firstValue  = Number($('#irisPrice').val())*10;   // get value of field
    var secondValue = Number($('#lavenderPrice').val())*10; // convert it to a float
    var mainCraftPrice  = Number($('#groundSpicesPrice').val())*10;
    var fourthValue = Number($('#fourth').val());
    

    $('#irisProfit').html(mainCraftPrice - firstValue ) ; // add them and output it
    $('#lavenderProfit').html(mainCraftPrice - secondValue ) ; // add them and output it
    $('#sl_iris').html((mainCraftPrice - firstValue ) /5) ; // add them and output it
    $('#sl_lavender').html((mainCraftPrice - secondValue ) /5) ; // add them and output it


// add them and output it
});

// Chopped Produce
$('input').keyup(function(){ // run anytime the value changes
    var carrotValue  = Number($('#carrotPrice').val())*10;   // get value of field
    var cucumberValue  = Number($('#cucumberPrice').val())*10;   // get value of field
    var garlicValue  = Number($('#garlicPrice').val())*10;   // get value of field
    var onionValue  = Number($('#onionPrice').val())*10;   // get value of field
    var potatoValue  = Number($('#potatoPrice').val())*10;   // get value of field
    var tomatoValue  = Number($('#tomatoPrice').val())*10;   // get value of field
    var mainCraftPrice  = Number($('#choppedProducePrice').val())*10;



    $('#carrotProfit').html(mainCraftPrice - carrotValue ) ; // add them and output it
    $('#cucumberProfit').html(mainCraftPrice - cucumberValue ) ; // add them and output it
    $('#garlicProfit').html(mainCraftPrice - garlicValue ) ; // add them and output it
    $('#onionProfit').html(mainCraftPrice - onionValue ) ; // add them and output it
    $('#potatoProfit').html(mainCraftPrice - potatoValue ) ; // add them and output it
    $('#tomatoProfit').html(mainCraftPrice - tomatoValue ) ; // add them and output it

    $('#sl_carrot').html((mainCraftPrice - carrotValue ) /5) ; // add them and output it
    $('#sl_cucumber').html((mainCraftPrice - cucumberValue ) /5) ; // add them and output it
    $('#sl_garlic').html((mainCraftPrice - garlicValue ) /5) ; // add them and output it
    $('#sl_onion').html((mainCraftPrice - onionValue ) /5) ; // add them and output it
    $('#sl_potato').html((mainCraftPrice - potatoValue ) /5) ; // add them and output it
    $('#sl_tomato').html((mainCraftPrice - tomatoValue ) /5) ; // add them and output it


// add them and output it
});

// Lumber
$('input').keyup(function(){ // run anytime the value changes
    var logValue  = Number($('#logPrice').val())*3;   // get value of field
    var lumberPrice  = Number($('#lumberPrice').val());
    

    $('#lumberProfit').html(lumberPrice - logValue ) ; // add them and output it
    $('#sl_lumber').html((lumberPrice - logValue ) /5) ; // add them and output it


// add them and output it
});


// Stone
$('input').keyup(function(){ // run anytime the value changes
    var rawstoneValue  = Number($('#rawstonePrice').val())*3;   // get value of field
    var stonePrice  = Number($('#stonePrice').val());
    

    $('#stoneProfit').html(stonePrice - rawstoneValue ) ; // add them and output it
    $('#sl_stone').html((stonePrice - rawstoneValue ) /5) ; // add them and output it


// add them and output it
});


// Iron
$('input').keyup(function(){ // run anytime the value changes
    var oreValue  = Number($('#orePrice').val())*3;   // get value of field
    var ironPrice  = Number($('#ironPrice').val());
    

    $('#ironProfit').html(ironPrice - oreValue ) ; // add them and output it
    $('#sl_iron').html((ironPrice - oreValue ) /5) ; // add them and output it


// add them and output it
});

// Leather
$('input').keyup(function(){ // run anytime the value changes
    var peltValue  = Number($('#peltPrice').val())*3;   // get value of field
    var leatherPrice  = Number($('#leatherPrice').val());
    

    $('#leatherProfit').html(leatherPrice - peltValue ) ; // add them and output it
    $('#sl_leather').html((leatherPrice - peltValue ) /5) ; // add them and output it


// add them and output it
});


// Fabric
$('input').keyup(function(){ // run anytime the value changes
    var cottonValue  = Number($('#cottonPrice').val())*10;   // get value of field
    var woolValue  = Number($('#woolPrice').val())*3;
    var fabricPrice  = Number($('#fabricPrice').val());

    

    $('#cottonProfit').html(fabricPrice - cottonValue ) ; // add them and output it
    $('#woolProfit').html(fabricPrice - woolValue ) ; // add them and output it

    $('#sl_cotton').html((fabricPrice - cottonValue ) /5) ; // add them and output it
    $('#sl_wool').html((fabricPrice - woolValue ) /5) ; // add them and output it



// add them and output it
});

