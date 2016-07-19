
function getTotleWidth( obj ) {
  var length = $(obj).size();
  var totleWidth = 0;

  for (var i = 0; i < length; i++) {
    totleWidth += $(obj).eq(i).outerWidth(true);
  }
  console.log(length);
  return totleWidth;
  //var abc = $(obj).parent()
//  console.log(abc.innerWidth());
}
function setWidth( obj, oWidth ) {
  $(obj).css({width:oWidth+10+'px'});
}
