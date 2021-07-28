

            // < --- sideMenu-S --->
            const sideMenu = document.querySelector('aside');

            document.addEventListener('scroll', function(){
                let scrollHeight = document.documentElement.scrollTop;

                if(scrollHeight >= 700){
                    sideMenu.classList.remove("off");
                    sideMenu.classList.add("fade_in");
                } else{
                    sideMenu.classList.add("off");
                }
            })

            $(document).ready(function(){
                $('a[href^="#"]').on('click',function (e) {
                    e.preventDefault();
            
                    let target = this.hash;
                    let $target = $(target);
            
                    $('html, body').stop().animate({
                        'scrollTop': $target.offset().top
                    }, 900, 'swing', function () {
                        window.location.hash = target;
                    });
                });
            });

            // < --- sideMenu-E --->

            // < --- modal-S --->
            const modal = document.querySelectorAll('.modal_wrap'), link = document.querySelectorAll('.link');
            let linkLength = link.length;
            const list = document.querySelectorAll('.info');
            const btn = document.querySelectorAll('.modal_btn');
            const body = document.querySelector('body');

            for(var i = 0; i < linkLength; i++){

                link[i].addEventListener('click', function(event){
                    event.preventDefault();
                    var parent = event.target.parentNode.parentNode.parentNode.parentNode;
                    var modalOn = parent.querySelector('.modal_wrap')
                    // parent.classList.add("on");
                    modalOn.classList.add("on");
                    body.classList.add("scroll_off")
                })
                let close;
                btn[i].addEventListener('click', function(e){
                    close = e.target.parentNode.parentNode;
                    close.classList.remove("on");
                    body.classList.remove("scroll_off");
                })
                modal[i].addEventListener('click', function(e){
                    close = e.target;
                    body.classList.remove("scroll_off");
                    close.classList.remove("on");
                })
            }
            // $(function(){

            //     var $link = $('.link').on('click', function(){
            //         var $num = $link.index(this);
            //         var $parent = $('.link').eq($num).parents("li");
            //         var $modal = $parent.find('.modal_wrap');
            //         var $body = $('body');
            //         var $btn = $('.modal button');

            //         $modal.addClass("on");
            //         $body.addClass("scroll_off");

            //         $btn.on('click', function(){
            //             $body.removeClass("scroll_off");
            //             $modal.removeClass("on");
            //         })

            //         $modal.on('click', function(){
            //             $body.removeClass("scroll_off");
            //             $modal.removeClass("on");
            //         })
            //     });
            // })
            
            // < --- modal-E --->