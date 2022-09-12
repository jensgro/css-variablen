// Original: http://codepen.io/webrocker/full/eNxqMw

function updateInfo(el) {
  el.siblings('.ctr-info').html(el.val() + '%');
}

function setDim(el, dim) {  
  var dim = dim || 'x',
      val = el.val(),
      cssAttr = 'background-position',
      target = $('.has-bg-image'),
      tmp = target.css(cssAttr).split(' ');  
  
  switch (dim) {
    case 'x':
      target.css(cssAttr,"");
      target.css(cssAttr, val + '%' + ' ' + tmp[1]);
      break;
    case 'y':
      target.css(cssAttr,"");
      target.css(cssAttr, tmp[0] + ' ' + val + '%');
      break;
  }
  updateInfo(el);
}

$('#sl_offset_x').on('input',function() {
  setDim($(this), 'x')
});

$('#sl_offset_y').on('input',function() {
  setDim($(this), 'y')
});

$('#sl_img_size').on('input',function() {
  var me = $(this),
      val = me.val(),
      target = $('.has-bg-image');
  target.css('background-size', "");
  target.css('background-size', val + '%');
  updateInfo(me);
});