$(function(){
    $('.search').on('click',function(){
        $('.nav').addClass('searching');
        $('.close').addClass('active')
    })
    $('.close').on('click',function(){
         $(this).removeClass('active')
        $('.nav').removeClass('searching');
    })
    $('.nav-item2 .item2:first').on('click',function(){
        $(this).toggleClass('rotate');
        $('.middle').toggleClass('block');
        $('.middle .middle-list li').toggleClass('active');
        $('.bag1').toggleClass('bag2')
        $('body').toggleClass('over')
    })

    var slides=$('.banner-box a');
    var dots=$('.dot li');
    dots.eq(0).addClass('active');
    var moving=true;
    moveTo=function(el,dir){
        if(moving){
            moving=false;
            if(dir=="right"){
                slides.filter('.active').removeClass('active').addClass("leave").delay(1000).queue(function(){
                    $(this).removeClass('leave').dequeue();
                    moving=true;
                })
                dots.removeClass('active');
                dots.eq($(el).index()).addClass('active')
                $(el).addClass("right");
                $(el).get(0).offsetWidth;
                $(el).removeClass("right").addClass("active")
            }else if(dir=="left"){
                slides.filter('.active').removeClass('active').addClass("enter").delay(1000).queue(function(){
                    $(this).removeClass('enter').dequeue();
                    moving=true;
                })
                $(el).addClass("left");
                $(el).get(0).offsetWidth;
                $(el).removeClass("left").addClass("active")
            }
        }

    }
    moveRight=function(){
        if(!moving){return};
        var active=slides.filter('.active');
        var el=active.next().length?active.next():slides.eq(0);
        moveTo(el,"right")
    }
    moveLeft=function(){
        if(!moving){return};
        var active=slides.filter('.active');
        var el=active.prev().length?active.prev():slides.eq(-1);
        moveTo(el,"left")
    }

    dots.on('click',function(){
        var c=slides.index(slides.filter('.active'));
        var n=$(this).index();
        dots.removeClass("active");
        dots.eq(n).addClass('active');
        if(n==c){
            return
        }
        if(n>c){
          ev=slides.eq(n)
            moveTo(ev,"right")
        }else if(n<c){
            ev=slides.eq(n)
            moveTo(ev,"left")
        }
    })
    setInterval(moveRight,2000)

    var left=$('.button ul .left1 .aniu1');
    var right=$('.button ul .right1 .aniu1');
    left.on('click',function(){
        moveLeft()
    });
    right.on('click',function(){
        moveRight();
    });
    $(document).on('mousedown',false)
    $('.footer2 .title h3').on('click',function(){
        $(this).find('span').toggleClass('act')
        $(this).closest('.title').find('ul').toggleClass('block')
        // console.log($(this).closest('.title'))
        $(this).closest('.title').find('ul li').toggleClass('ani')
    })
})