function multiple(n){
  for(var i=0; i<=n; i++){
    var result = []

    if (i%3===0 || i%5===0){
//      console.log(i +" est un multiple de 3 ou de 5  (ou des deux)");
    result.push(i);
    }
}
return result;
}

var array = multiple(45);
console.log(array);
