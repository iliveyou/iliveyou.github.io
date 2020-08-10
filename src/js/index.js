import Cookies from 'js-cookie';

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

import "jquery.mb.ytplayer";
import "waypoints/lib/jquery.waypoints";
import "owl.carousel";

//https://stackoverflow.com/a/45085355/3929620
//import { Typed } from 'typed.js';

import WOW from 'wow.js';

import './theme/plugins';
import './theme/init';

(function($) {
    'use strict';

    $("#video-bg").mb_YTPlayer();

    new WOW().init();

}(jQuery));
