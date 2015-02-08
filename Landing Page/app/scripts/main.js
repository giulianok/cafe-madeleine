$(function () {
    'use strict';
    
    
    var email = 'info{arroba}cafemadeleine.com'.replace('{arroba}', '@');
    

    var Loading = {
        total: $('img').length,
        loaded: 0,
        init: function () {
            var $this = this;
            $('img').each(function (index) {
                var img = new Image();
                img.src = $(this).attr('src');
                img.onload = function () {
                    $this.loaded++;
                    if ($this.loaded === $this.total - 1) {

                        setTimeout(function () {

                            $('body').addClass('active');

                            var delay = 5000;
                            var duration = 200;
                            $('.fade').each(function () {
                                var $this = $(this);
                                setTimeout(function () {
                                    $this.addClass('active');
                                }, delay);
                                delay += duration;
                            });
                            
                            Moving();

                        }, 1000);

                    }
                };
            });
        }

    };
    
    var Moving = function () {
        
        $(window).on('mousemove', function (event) {
            var x = event.pageX;
            var y = event.pageY;
            var back = $('#back');
            var main = $('main');
            var section = main.find('section .content');
            
            var position = {
                back: {
                    x: (0 - x) / 150,
                    y: (0 - y) / 150
                },
                main: {
                    x: ((0 - x) / 200) * -1
                },
                section: {
                    x: ((0 - x) / 100),
                    y: ((0 - y) / 100)
                }
            };
            
            back.css({
                'top': position.back.y,
                'left': position.back.x
            });
            
            return;
            
            main.css({
                'left': position.main.x
            });
            
            section.css({
                'top': position.section.y,
                'left': position.section.x
            });
            
        });
        
    };

    Loading.init();

    $('.email').attr('href', 'mailto:' + email).html(email);


});


