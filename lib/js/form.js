
(function ($) {
    "use strict";

    
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(e) {
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false) {
                showValidate(input[i]);
                check=false;
            }
        }

        if (check) {
            e.preventDefault();

            const form = $(this)[0] ;

            $.ajax({
                type: 'POST',
                url: 'https://warm-sands-85930.herokuapp.com/clientMessage',
                data: {
                    "name": form.name.value,
                    "email": form.email.value,
                    "message": form.message.value
                }
            }).then(() => {
                location.reload();
            }).catch(err => {
                location.reload();
            });
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim() == '') {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);