$(function(){
    $.get('/license.html', function(data){
        $('.text-content').after(data);
    });
});