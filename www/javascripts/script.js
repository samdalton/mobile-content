var backbone = {
    models : {},
    views : {
        exercises : {}
    },
    collections : {}
}, base;

$(function() {
    
    base = $("#base");
    mainApp = new backbone.views.Application( {el : base, lessons : page_data } );
    
    
    
});