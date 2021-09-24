//=============smooth_scroll==================
var scroll = new SmoothScroll('a[href*="#"]');

//==========top_to_bottom button=============
$(window).scroll(function(){
    var scroling =$(this).scrollTop();
    
    if(scroling > 900){
        $('.back_top').slideDown();
    }
    else{
        $('.back_top').slideUp();
    }
    
})

