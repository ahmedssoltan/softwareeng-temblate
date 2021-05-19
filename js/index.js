

/*
hide()
show()
toggle()

slideUp()
slideDown()
slideToggle()

fadeIn()
fadeOut()
fadeToggle()
fadeTo(dur,opacity)

css  --> setter , getter
attr --> setter ,getter
callback functions
chaining
animate()




//exers1

$(".wrapper").animate({width:"100%"},2000);
$(".wrapper").animate({height:window.innerHeight},2000,function(){
    $(".wrapper h1").fadeIn(1000,function(){
        $(".wrapper .item").fadeIn(1000)
    })


});


*/

var lis=$(".color-ul li");
lis.eq(0).css("backgroundColor","red") //setter
lis.eq(1).css("backgroundColor","#09c")
lis.eq(2).css("backgroundColor","orange")
lis.eq(3).css("backgroundColor","brown")

$(".color-ul li").click(function(){
   var color=  $(this).css("backgroundColor"); //getter
   $(".change").css("color",color)
})

$(".options > i").click(function(){
    $(".options .color-options").toggle();
})


$("#plus").click(function(){
    console.log($(".change").css("fontSize"));
    if($(".change").css("fontSize") > "40")
        {
                   $(".change").css("fontSize","40px")

        }
    else{
               $(".change").css("fontSize","+=4px")

    }

})

$(".sub-img").click(function(){
    var src= $(this).attr("src"); //getter
    $(".main-img").attr("src",src)
})









let advisorsOffset=$(".advisors").offset().top;
$(window).scroll(function(){
    var x=$(window).scrollTop();
   if(x>advisorsOffset)
       {
           $(".navbar").css({backgroundColor:"rgba(0,0,0,0.7)",transition:'all 1s'})
       }
    else{
            $(".navbar").css("backgroundColor","transparent")

    }
    
    if(x>1200){
        $("#upBtn").fadeIn(2000)
    }
    else{
                $("#upBtn").fadeOut(2000)

    }
})

$("#upBtn").click(function(){
    $("body").animate({scrollTop:0},1000)
})

$(".navbar a").click(function(){
    var href=$(this).attr("href");
    
    let offset=$(href).offset().top; 
    $("body").animate({scrollTop:offset},1000)

})

$(document).ready(function(){
    $("#loading").fadeOut(2000,function(){
        $("body").css("overflow","auto")
    })
})



































