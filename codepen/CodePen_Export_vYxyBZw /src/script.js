

String.prototype.cipher = function(shift){
let alpa = Array.from({length: 26}, (v, k) => k+97).map(x=> String.fromCharCode(x))

return  this.split('').map( x => x==' ' ? ' ':x.toLowerCase() == x ?  alpa[(alpa.indexOf(x) +  shift > 26 ?  alpa.indexOf(x) +  shift -26: alpa.indexOf(x) +  shift )] :  alpa[(alpa.indexOf(x.toLowerCase()) +  shift > 26 ?  alpa.indexOf(x.toLowerCase()) +  shift -26: alpa.indexOf(x.toLowerCase()) +  shift )].toUpperCase() ).join('') 
}

let a = 'hi'

//alert(ans.toString() )

function shift_part(a){
a = a.split(' = ')
let list = Array.from({
  length: 26
}, (v, k) => k + 97).map(x => String.fromCharCode(x))

return list.indexOf(a[0])*-1+list.indexOf(a[1]) <0? 26+list.indexOf(a[0])*-1+list.indexOf(a[1]): list.indexOf(a[0])*-1+list.indexOf(a[1])       
}


$('#str').keyup(function() {ss()})

function ss(){

let str = ( $('#str').text()||$('#str').val() )

$('#ans').text(str.cipher( shift_part(  $('#c').text()||$('#c').val()  ) ) )
}

//alert( shift_part('b = n') )

$(document).ready(function() {
  //alert(1);
  //$('#demo1').circleType();
  $('#demo2').circleType()
  $('#demo1').circleType();
//  $('#demo-article').flowtype();
})

$( "#a" ).click(function() {  
$('#a').text() == '-'? $('#a').text('+'):$('#a').text('-')
})

$( "#b" ).click(function() {  
$('#b').text() == '-'? $('#b').text('+'):$('#b').text('-')
})

var rotation = 0;
var rotationa = 13*13;

var letters = Array.from({
  length: 26
}, (v, k) => k + 97).map(x => String.fromCharCode(x))
let i = 13
let t = 0

$("#c").text(`${letters[t]} = ${letters[i]}`)

jQuery.fn.rotate = function(degrees) {
  $(this).css({
    'transform': 'rotate(' + degrees + 'deg)'
  });
  return $(this);
};

$('#demo1').click(function() {
if($('#a').text() == '-'){
  t--
  if (t < 0) {
    t = 25
  }
  $("#c").text(`${letters[t]} = ${letters[i]}`)
  rotationa += 13;
  $(this).rotate(rotationa);
  ss()
}else{
    t++
  if (t > 25) {
    t = 0
}
  $("#c").text(`${letters[t]} = ${letters[i]}`)
  rotationa -= 13;
  $(this).rotate(rotationa);
  ss()
}

//  $("#c").text(letters[i])

});


$('#demo2').click(function() {

  if($('#b').text() == '-'){
  i--
  if (i < 0) {
    i = 25
  }
    $("#c").text(`${letters[t]} = ${letters[i]}`)
  rotation += 13;
  $(this).rotate(rotation);
  ss()
    
  }else{
     i++
  if (i > 25) {
    i = 0
  }
    $("#c").text(`${letters[t]} = ${letters[i]}`)
  rotation -= 13;
  $(this).rotate(rotation);
  ss()
  }

});

$('#demo1').css({'transform' : 'rotate('+ 13*13 +'deg)'})
