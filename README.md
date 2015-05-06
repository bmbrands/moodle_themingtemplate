
# Bootstrap Theming Template

* Moodle Bootstrap 3 theming template
* copyright 2015 Bas Brands. www.sonsbeekmedia.nl
* by Bas Brands
* license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later

## About this template
This template has been created for the 2015 Moodle Moot theming workshop. It can be used to customize Moodle HTML and CSS without having to install Moodle on your machine. Warning: You can not use this template as a real Moodle theme! It was created to provide an easy and quick way of creating a theme mockup.

This template is based on:

Moodle version 2.8

Bootstrap version 3.2

## How to use this template
Simply download the zipfile from this location:
https://github.com/bmbrands/moodle_themingtemplate/archive/master.zip

Unzip it somewhere on your computer. Then click the home.html file, it should open in your default browser. If it looks somewhat like this you are ready to go.

![Image of template](https://github.com/bmbrands/moodle_themingtemplate/blob/master/images/screenshottemplate.png)

The first place to start customizing your template is using css/custom.css file. Use your code editor to add or override any Moodle css.

If you want to change the page structure have a look at the .html files in your "root" folder.

If you want to add sliders, caroussels, popups, modals use the code examples provided on http://getbootstrap.com/javascript/


## Template content
This template contains:

Moodle Course page: course.html
Moodle Home page: home.html
Moodle Dashboard: myhome.html
Moodle Activity page: quiz.html

These template are stripped from any page content. Page content is loaded using Angular.js.

Whenever you see this comment:
<!-- Content Loaded by Angular.js -->
Go and look for the HTML in the /partials folder.


## Supported browsers
IE9+
Recent versions of all modern browsers


## JavaScript Libraries
This template does not provide YUI JavaScript like Moodle does. It uses Angular.js to split the template files into partials. And provides jQuery and Bootstrap.js so you can experiment with all of the Bootstrap JavaScript coolness!


### Bootstrap Copyright and license

Authors: Mark Otto, Jacob Thornton
URL: http://getbootstrap.com/
License:
Code and documentation copyright 2011-2015 Twitter, Inc. Code released under the MIT license. Docs released under Creative Commons.

### angular.js

AngularJS v1.3.15
(c) 2010-2014 Google, Inc. http://angularjs.org
License: MIT
