/*$(document).ready(function(){
    $('.category-items').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      /*infinite: true/flase tiến/lui
      arrows: flase dùng chuột để chạy
      ---chạy sau bao lâu
      autoplay: true,
      autoplaySpeed: 2000, 
      ---ko chạy nữa
      draggable: flase,

      ---thay đổi nút bấm
      
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
        
        dots: true,
    });
  }); */

$(document).ready(function(){
  $('.category-items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    swipe:true,
    customPaging:
      function(slick,index) {
      return '<a>' + (index + 1) + '</a>'; },
  })
});

/*
<div data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'>
  <div><h3>1</h3></div>
  <div><h3>2</h3></div>
  <div><h3>3</h3></div>
  <div><h3>4</h3></div>
  <div><h3>5</h3></div>
  <div><h3>6</h3></div>
</div>
*/