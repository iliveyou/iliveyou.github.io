import 'jquery.easing'

import 'bootstrap/js/dist/index';

import 'bootstrap/js/dist/util';
//import 'bootstrap/js/dist/alert';
import 'bootstrap/js/dist/button';
//import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/collapse';
//import 'bootstrap/js/dist/dropdown';
//import 'bootstrap/js/dist/modal';
//import 'bootstrap/js/dist/popover';
import 'bootstrap/js/dist/scrollspy';
//import 'bootstrap/js/dist/tab';
//import 'bootstrap/js/dist/toast';
import 'bootstrap/js/dist/tooltip';

//https://stackoverflow.com/a/62859961/3929620
//https://stackoverflow.com/a/61540437/3929620
import $ from 'jquery';
import jQueryBridget from 'jquery-bridget';
import Isotope from 'isotope-layout';
// make Isotope a jQuery plugin
jQueryBridget( 'isotope', Isotope, $ );
// now you can use $().isotope()

//import 'magnific-popup';

// ES6 method
// Note: in this way is not available jQuery and data-attribute automatic initialization
import {jarallax, jarallaxVideo} from 'jarallax';
jarallaxVideo();

//https://rossta.net/blog/you-might-not-need-jquery-with-webpack.html
//https://inopinatus.org/2019/09/14/webpacker-jquery-and-jquery-plugins/
//https://www.threatstack.com/blog/using-webpack-build-system-in-existing-codebases
//https://www.toptal.com/javascript/a-guide-to-managing-webpack-dependencies
//https://stackoverflow.com/a/62859961/3929620
//https://stackoverflow.com/a/61540437/3929620
//https://gist.github.com/remarkablemark/13450bd0118863b6501756eee3506aa3
//https://github.com/pupunzi/jquery.mb.YTPlayer/issues/462
//https://github.com/pupunzi/jquery.mb.YTPlayer/issues/401#issuecomment-432232293
//import 'jquery.mb.ytplayer';
import './lib/jquery.mb.YTPlayer';

//import 'waypoints/lib/jquery.waypoints';
import 'owl.carousel';

//https://stackoverflow.com/a/45085355/3929620
import Typed from 'typed.js';

//https://stackoverflow.com/a/46993250/3929620
import '@fancyapps/fancybox';

import WOW from 'wow.js';

//https://stackoverflow.com/a/53580347/3929620
import '@fortawesome/fontawesome-free/js/all';

import 'jquery.scrollto';

import 'cookieconsent';

//import './theme/plugins';
//import './theme/init';

(function($) {
    'use strict';

    let windowWidth = $(window).width();
    let windowScrollTop	= $(window).scrollTop();

    $.extend({

        popupCenter: function (url,w,h) {
            var l = Math.floor((screen.width-w)/2); // default width = 640
            var t = Math.floor((screen.height-h)/2); // default height = 400
            //return window.open(url,"","width=" + w + ",height=" + h + ",top=" + t + ",left=" + l);
            return window.open(url,"","scrollbars,width=" + w + ",height=" + h + ",top=" + t + ",left=" + l);
        },

        //https://stackoverflow.com/a/50319997
        //https://jsfiddle.net/trixta/T29Kx/
        //https://www.html5rocks.com/en/tutorials/forms/constraintvalidation/
        //https://stackoverflow.com/a/59732941
        checkForm: function() {

            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');

            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener('submit', function(event) {

                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();

                        var errorElements = $(form).find('.form-control:invalid, .form-check-input:invalid, .custom-control-input:invalid, .custom-file-input:invalid, .custom-select:invalid');

                        $.each(errorElements, function(index, element) {
                            $(element).siblings('.invalid-feedback').html( $(element)[0].validationMessage );
                        });
                    }

                    form.classList.add('was-validated');
                }, false);

                // before submit
                var elements = $(form).find('.form-control, .form-check-input, .custom-control-input, .custom-file-input');
                $.each(elements, function(index, element) {
                    if (element.willValidate === true) {
                        $(element).keyup(function() {
                            if (element.checkValidity() === true) {
                                $(element).removeClass('is-invalid').addClass('is-valid');
                            } else {
                                $(element).removeClass('is-valid').addClass('is-invalid');
                                $(element).siblings('.invalid-feedback').html( $(element)[0].validationMessage );
                            }
                        });
                    }
                });

                var elements = $(form).find('.custom-select');
                $.each(elements, function(index, element) {
                    if (element.willValidate === true) {
                        $(element).change(function() {
                            if (element.checkValidity() === true) {
                                $(element).removeClass('is-invalid').addClass('is-valid');
                            } else {
                                $(element).removeClass('is-valid').addClass('is-invalid');
                                $(element).siblings('.invalid-feedback').html( $(element)[0].validationMessage );
                            }
                        });
                    }
                });
            });
        },
    });

    if ( $('#typed-1').length ) {

        var typed_1 = new Typed('#typed-1', {
            stringsElement: '#typed-1-strings',
            startDelay: 3000,
            typeSpeed: 80,
            backDelay: 3000,
            loop: true,
            showCursor: false
        });
    }
    if ( $('#typed-2').length ) {

        var typed_2 = new Typed('#typed-2', {
            stringsElement: '#typed-2-strings',
            typeSpeed: 200,
            loop: true,
            showCursor: false
        });
    }

    let videoObj = [
        /*{
            // video iniziale del mondo che gira scelto da A. Rigon
            'id': 'rGlqwyBqp50',
            'startAtMin': 0,
            'startAtMax': 0,
            'stopAt': 0,
            'abundance': 0.08
        },*/
        {
            // video di ~3 ore di paesaggi con il drone che si ripetono ogni ~20 min
            'id': 'BHACKCNDMW8',
            'startAtMin': 3,
            'startAtMax': 10000,
            'stopAt': 0,
            'abundance': 0.08
        },
        /*{
            // video di business persons di ~1 min con scritte finali
            'id': 'YLN1Argi7ik',
            'startAtMin': 0,
            'startAtMax': 0,
            'stopAt': 0,
            'abundance': 0.08
        },*/
        {
            // video di ~6 min di paesaggi con il drone un po' artistici, con scritte finali
            'id': 'zdFLVNhB7pQ',
            'startAtMin': 20,
            'startAtMax': 240,
            'stopAt': 332,
            'abundance': 0.08
        },
        /*{
            // video di ~3 min movimentato con il drone, con effetti, rapporto 16:9 troppo stretto
            'id': 'kTWoeqPXpuo',
            'startAtMin': 0,
            'startAtMax': 0,
            'stopAt': 0,
            'abundance': 1
        },*/
        {
            // video di ~3 ore di boschi non solo con il drone, si ripetono ogni ~20 min
            'id': 'hlWiI4xVXKY',
            'startAtMin': 0,
            'startAtMax': 10000,
            'stopAt': 0,
            'abundance': 0.08
        },
    ];

    //https://stackoverflow.com/a/60373915/3929620
    let videokeys = Object.keys(videoObj);
    let videoRandomKey = videokeys[Math.floor(Math.random()*videokeys.length)];
    let video = videoObj[videoRandomKey];

    $('.player').YTPlayer({
        //videoURL: '//www.youtube.com/watch?v={VIDEO_ID}',
        //videoURL: '//youtu.be/{VIDEO_ID}',
        //videoURL: '{VIDEO_ID}',
        videoURL: video.id,
        //coverImage: '//i3.ytimg.com/vi/{VIDEO_ID}/maxresdefault.jpg',
        containment: '#home',
        showControls: false,
        autoPlay: true,
        loop: true,
        mute: true,
        optimizeDisplay: true,
        abundance: video.abundance,
        startAt: Math.floor(Math.random()*(video.startAtMax-video.startAtMin+1)+video.startAtMin),
        stopAt: typeof video.stopAt !== 'undefined' ? video.stopAt : 0
    });

    //https://stackoverflow.com/a/21273332
    $('[data-toggle="tooltip"]').tooltip();

    //https://stackoverflow.com/a/32636784/3929620
    let ocDefaults = {};

    //https://github.com/OwlCarousel2/OwlCarousel2/issues/2412#issuecomment-485368380
    $('.owl-carousel').each(function(index, element) {

        let ocOptions = $(element).data('options') && typeof $(element).data('options') === 'string' ?
            eval('(' + $(element).data('options') + ')') :
            $(element).data('options');

        if (typeof ocOptions !== 'object')
            ocOptions = {};

        $(element).owlCarousel( $.extend(ocDefaults, ocOptions) );
    });

    jarallax(document.querySelectorAll('.jarallax'), {
        speed: 0.5
    });

    let header = $('header');
    let scrollto_next = $('#scrollto-next');
    let scrollto_top = $('#scrollto-top');

    if (windowWidth > 992) {

        if (windowScrollTop > 100){
            header.addClass('scroll');
        } else{
            header.removeClass('scroll');
        }
    }

    if (windowScrollTop > 100) {
        scrollto_top.filter(':hidden').fadeIn('slow');
    } else {
        scrollto_top.fadeOut('slow');
    }

    $(window).resize(function() {

        let windowWidth = $(window).width();

        if (windowWidth > 992) {

            let windowScrollTop = $(window).scrollTop();

            if (windowScrollTop > 100) {
                header.addClass('scroll');
            } else {
                header.removeClass('scroll');
            }
        }
    });

    $(window).scroll(function() {

        let windowScrollTop	= $(window).scrollTop();

        if (windowScrollTop > 100) {
            header.addClass('scroll');
            scrollto_top.filter(':hidden').fadeIn('slow');
        } else {
            header.removeClass('scroll');
            scrollto_top.fadeOut('slow');
        }

        if ($.fn.collapse) {
            if($('.navbar-collapse').hasClass('show')) {
                $('.navbar-collapse').collapse('hide');
                $('.hamburger').toggleClass('is-active');
            }
        }
    });

    $('.hamburger').on('click',function() {
        $(this).toggleClass('is-active');
    });

    $(document).on('click', '.popup-center', function (e) {
        e.preventDefault();

        let href = $(this).attr('href');

        let newWin = $.popupCenter(href, 600, 400);

        if(!newWin || newWin.closed || typeof newWin.closed == 'undefined') {

            $.fancybox.open( '<div class="message"><div class="alert alert-warning mb-0">Il tuo browser sta bloccando le finestre popup, aggiungi questo sito alla lista delle eccezioni.</div></div>' );
        }
    });

    //https://github.com/bradvin/social-share-urls
    $(document).on('click', '.popup-facebook', function (e) {
        FB.ui({
            method: 'share',
            display: 'popup',
            href: $(this).data('share-uri'),
        }, function(response){
            //https://stackoverflow.com/a/23884877
            if (response && !response.error_code) {
                console.log('OK: '+JSON.stringify(response));
            } else if (response && response.error_code === 4201) { //Cancelled
                console.log('User cancelled: '+decodeURIComponent(response.error_message));
            } else {
                console.log('Not OK: '+JSON.stringify(response));
            }
        });
    });

    $.extend($.scrollTo.defaults, {
        axis: 'y',
        duration: 1000
    });

    //https://codepen.io/nxworld/pen/OyRrGy
    //https://stackoverflow.com/a/9430472
    $(document).on('click', '.scrollto', function(e) {
        e.preventDefault();

        //FIXED: toltip flickering
        if ($.fn.tooltip) {
            $(this).tooltip('hide');
        }

        if ($.fn.fancybox) {
            $.fancybox.close();
        }

        let target = typeof $(this).data('target') !== 'undefined' ? $(this).data('target') : $($(this).attr('href'));
        let duration = typeof $(this).data('duration') !== 'undefined' ? $(this).data('duration') : $.scrollTo.defaults.duration;

        let settings = $(this).data('settings') && typeof $(this).data('settings') == 'string' ?
            eval('(' + $(this).data('settings') + ')') :
            $.scrollTo.defaults;

        if (typeof settings !== 'object')
            settings = {};

        $.scrollTo(target, duration, settings);

        //http://stackoverflow.com/a/7317013
        $(e.target).blur();
    });

    //https://gist.github.com/Bloggerschmidt/61beeca2cce94a70c9df
    $('img').filter(function() {
        return this.src.match(/.*\.svg$/);
    }).each((i, e) => {

        const $img = $(e);
        const imgID = $img.attr('id');
        const imgClass = $img.attr('class');
        const imgURL = $img.attr('src');

        $.get(imgURL, (data) => {
            // Get the SVG tag, ignore the rest
            let $svg = $(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', `${imgClass} replaced-svg`);
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr(`viewBox 0 0  ${$svg.attr('height')} ${$svg.attr('width')}`);
            }

            // Replace image with new SVG
            $img.replaceWith($svg);
        }, 'xml');
    });

    //starter JavaScript for disabling form submissions if there are invalid fields
    window.addEventListener('load', function() {

        $.checkForm();

        //https://stackoverflow.com/a/41694352
        $(document).on('submit', 'form[data-sync]', function (e) {

            if (!e.isDefaultPrevented()) {
                //e.preventDefault();

                var $form = $(this);
                var $btn = $form.find('button[type="submit"]');

                //https://stackoverflow.com/a/54533740
                $btn.prop('disabled', true);

                var $loading_text = $btn.data('loading-text');

                if (typeof $loading_text !== 'undefined') {

                    $btn.html($loading_text);
                }
            }
        });
    });

    window.cookieconsent.initialise({
        'palette': {
            'popup': {
                'background': 'rgba(255,255,255,.3)',
                'text': '#000000'
            },
            'button': {
                'background': 'transparent',
                'text': '#ed2629',
                'border': '#ed2629'
            }
        },
        'position': 'bottom-left',
        'content': {
            'message': 'I cookie ci aiutano a fornire i nostri servizi. Utilizzando tali servizi, acconsenti all’uso dei cookie.',
            'dismiss': 'Ok ho capito!',
            'link': 'Maggiori informazioni'
        }
    });

    $(window).on('load', function() {

        new WOW().init();

        $('.preloader-wrapper').fadeOut();
    });

}(jQuery));
