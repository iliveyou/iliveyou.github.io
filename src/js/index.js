import "jquery.easing"

import 'bootstrap/js/dist/index';

import 'bootstrap/js/dist/util';
//import 'bootstrap/js/dist/alert';
import 'bootstrap/js/dist/button';
//import 'bootstrap/js/dist/carousel';
//import 'bootstrap/js/dist/collapse';
//import 'bootstrap/js/dist/dropdown';
//import 'bootstrap/js/dist/modal';
//import 'bootstrap/js/dist/popover';
//import 'bootstrap/js/dist/scrollspy';
//import 'bootstrap/js/dist/tab';
//import 'bootstrap/js/dist/toast';
//import 'bootstrap/js/dist/tooltip';

//https://stackoverflow.com/a/62859961/3929620
//https://stackoverflow.com/a/61540437/3929620
import $ from 'jquery';
import jQueryBridget from 'jquery-bridget';
import Isotope from 'isotope-layout';
// make Isotope a jQuery plugin
jQueryBridget( 'isotope', Isotope, $ );
// now you can use $().isotope()

import "magnific-popup";

//import {jarallax, jarallaxVideo} from 'jarallax';
//jarallaxVideo();

//https://rossta.net/blog/you-might-not-need-jquery-with-webpack.html
//https://inopinatus.org/2019/09/14/webpacker-jquery-and-jquery-plugins/
//https://www.threatstack.com/blog/using-webpack-build-system-in-existing-codebases
//https://www.toptal.com/javascript/a-guide-to-managing-webpack-dependencies
//https://stackoverflow.com/a/62859961/3929620
//https://stackoverflow.com/a/61540437/3929620
//https://gist.github.com/remarkablemark/13450bd0118863b6501756eee3506aa3
//https://github.com/pupunzi/jquery.mb.YTPlayer/issues/462
//https://github.com/pupunzi/jquery.mb.YTPlayer/issues/401#issuecomment-432232293
//import "jquery.mb.ytplayer";
import "./lib/jquery.mb.YTPlayer";

import "waypoints/lib/jquery.waypoints";
import "owl.carousel";

//https://stackoverflow.com/a/45085355/3929620
//import { Typed } from 'typed.js';

//https://stackoverflow.com/a/46993250/3929620
import '@fancyapps/fancybox';

import WOW from 'wow.js';

import "cookieconsent";

import './theme/plugins';
import './theme/init';

(function($) {
    'use strict';

    $.extend({
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
            });

            // before submit
            var elements = document.querySelectorAll('.form-control, .form-check-input, .custom-control-input, .custom-file-input');
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

            var elements = document.querySelectorAll('.custom-select');
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
        },
    });

    $(".player").YTPlayer();

    new WOW().init();

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
        "palette": {
            "popup": {
                "background": "rgba(255,255,255,.3)",
                "text": "#000000"
            },
            "button": {
                "background": "transparent",
                "text": "#ed2629",
                "border": "#ed2629"
            }
        },
        "position": "bottom-left",
        "content": {
            "message": "I cookie ci aiutano a fornire i nostri servizi. Utilizzando tali servizi, acconsenti all’uso dei cookie.",
            "dismiss": "Ok ho capito!",
            "link": "Maggiori informazioni"
        }
    });

}(jQuery));
