var cottlecolor = "yellow";
var waterQuantity = 1;
var isFull = false;

// array
var items = ['bottle', 'mug', 'paper', 'pen'];
items.indexOf('logens');
items.push('envelop');
items.push('watch');
items.pop();

//conditionals
if(items.length >= 4){
    console.log(' You have too many stuff on your desk');
}
else if(items.length == 4){
    console.log('you only have one hali items');
}
else{
    console.log('Wow! you have a clean desk');
}