window.onload = function () {
  var divs = document.getElementsByTagName('div');
  ids=[];
  for(var i=0;i<divs.length;i++){
    var atr = divs[i].id;
    ids[i]=atr;
    console.log(atr);
  } 
  var i = 0;
  ids.forEach((id) => {
    i++;
    document.write(`El id numero ${i} es: ${id}<br/>`);
  });
}

