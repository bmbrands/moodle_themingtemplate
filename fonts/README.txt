Bootstrap Theming Template

* package   Moodle Bootstrap 3 theming template
* copyright 2015 Bas Brands. www.sonsbeekmedia.nl
* author    Bas Brands
* license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later

About this folder
=================

This is the webfonts folder.

If you want to include some fonts make sure you add the correct CSS after adding the fonts to this folder:

The correct syntax for this template is:

@font-face {
  font-family: 'FontAwesome';
  src: url('../fonts/fontawesome-webfont.eot?v=4.2.0');
  src: url('../fonts/fontawesome-webfont.eot?#iefix&v=4.2.0') format('embedded-opentype'),
    url('../fonts/fontawesome-webfont.woff?v=4.2.0') format('woff'),
    url('../fonts/fontawesome-webfont.ttf?v=4.2.0') format('truetype'),
    url('../fonts/fontawesome-webfont.svg?v=4.2.0#fontawesomeregular') format('svg');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Glyphicons Halflings';
  src: url('../fonts/glyphicons-halflings-regular.eot');
  src: url('../fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'),
    url('../fonts/glyphicons-halflings-regular.woff') format('woff'),
    url('../fonts/glyphicons-halflings-regular.ttf') format('truetype'),
    url('../fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg');
}