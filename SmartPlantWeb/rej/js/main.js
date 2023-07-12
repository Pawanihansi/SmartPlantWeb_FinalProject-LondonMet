(function($) {

    $(document).on('click', '.toggle-password', function() {

        $(this).toggleClass("fa-eye fa-eye-slash");
        
        var input = $("#validationCustom03");
        input.attr('type') === 'password' ? input.attr('type','text') : input.attr('type','password')
    });
    

})(jQuery);
