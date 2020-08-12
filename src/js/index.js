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

import WOW from 'wow.js';

import './theme/plugins';
import './theme/init';

(function($) {
    'use strict';

    $(".player").YTPlayer();

    new WOW().init();

}(jQuery));
