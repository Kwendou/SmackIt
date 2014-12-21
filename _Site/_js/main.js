$ ( ".selecteur__nav--element" ).click (function (){ 
    $ ( this ). addClass ( 'selecteur__nav--element--active' ).siblings (). removeClass ( 'selecteur__nav--element--active' ); 
 });

$ ( ".nav__el" ).click (function (){ 
    $ ( this ). addClass ( 'nav__el--active' ).siblings (). removeClass ( 'nav__el--active' ); 
 });