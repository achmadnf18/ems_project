<link rel="stylesheet" type="text/css" href="<?php echo base_url()?>assets/vendor/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="<?php echo base_url()?>assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" type="text/css" href="<?php echo base_url()?>assets/fonts/Linearicons-Free-v1.0.0/icon-font.min.css">
<link rel="stylesheet" type="text/css" href="<?php echo base_url()?>assets/vendor/animate/animate.css">
<link rel="stylesheet" type="text/css" href="<?php echo base_url()?>assets/vendor/css-hamburgers/hamburgers.min.css">
<link rel="stylesheet" type="text/css" href="<?php echo base_url()?>assets/vendor/animsition/css/animsition.min.css">
<link rel="stylesheet" type="text/css" href="<?php echo base_url()?>assets/vendor/select2/select2.min.css">
<link rel="stylesheet" type="text/css" href="<?php echo base_url()?>assets/vendor/daterangepicker/daterangepicker.css">
<link rel="stylesheet" type="text/css" href="<?php echo base_url()?>assets/css/login-util.css">
<link rel="stylesheet" type="text/css" href="<?php echo base_url()?>assets/css/login-main.css">

<div class="limiter">
    <div class="container-login100">
        <div class="wrap-login100">
            <div class="login100-form-title" style="background-image: url(<?php echo base_url()?>assets/images/bg-01.jpg);">
                <span class="login100-form-title-1">
                    Sign In
                </span>
            </div>

            <form class="login100-form validate-form" method="POST">
                <div class="wrap-input100 validate-input m-b-26" data-validate="E-mail is required">
                    <span class="label-input100">E-mail</span>
                    <input class="input100" type="email" name="email" placeholder="Enter E-mail">
                    <span class="focus-input100"></span>
                </div>

                <div class="wrap-input100 validate-input m-b-18" data-validate = "Password is required">
                    <span class="label-input100">Password</span>
                    <input class="input100" type="password" name="password" placeholder="Enter password">
                    <span class="focus-input100"></span>
                </div>

                <div class="flex-sb-m w-full p-b-30">
                    <div class="container-login100-form-btn">
                        <!-- <button class="login100-form-btn" type="submit">
                            Register
                        </button> -->
                        <button type="submit" class="login100-form-btn">Login</button>
                    </div>

                    <div>
                        <a href="<?php echo site_url()?>account/register" class="txt1">
                            Don't have account ?
                        </a>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

<script>

    (function ($) {
        "use strict";

        /*==================================================================
        [ Focus Contact2 ]*/
        $('.input100').each(function(){
            $(this).on('blur', function(){
                if($(this).val().trim() != "") {
                    $(this).addClass('has-val');
                }
                else {
                    $(this).removeClass('has-val');
                }
            })    
        })

        /*==================================================================
        [ Validate ]*/
        var input = $('.validate-input .input100');

        $('.validate-form').on('submit',function(e){
            e.preventDefault();
            
            var check = true;

            for(var i=0; i<input.length; i++) {
                if(validate(input[i]) == false){
                    showValidate(input[i]);
                    check=false;
                }
            }

            if(!check) return;
            
            const data = {
                email: $('input[name="email"]').val(),
                password: SparkMD5.hash($('input[name="password"]').val()),
            }
            $.post("<?php echo site_url()?>auth/login", data ).then(res => {
                $.toast({
                    text: "<span class='my-2' style='font-size: 14px;'><b>Login success, page will be redirect... :)</b></span>", 
                    icon: 'success',
                    showHideTransition: 'slide',
                    allowToastClose: true,
                    hideAfter: false,
                    stack: false,
                    position: 'top-center', 
                    textAlign: 'left',
                    loader: false,
                });
                window.setTimeout(function(){
                    window.location.reload();  
                }, 3000)
            }).fail(xhr => {
                console.log(xhr)
                const res = JSON.parse(xhr.responseText || {});
                $.toast({
                    // heading: "Failed Register",
                    text: "<span class='my-2' style='font-size: 14px;'><b>"+ res.message +"</b>", 
                    icon: 'error',
                    showHideTransition: 'slide',
                    allowToastClose: true,
                    hideAfter: 3000,
                    stack: false,
                    position: 'top-center', 
                    textAlign: 'left',
                    loader: false,
                });
            });
        });


        $('.validate-form .input100').each(function(){
            $(this).focus(function(){
            hideValidate(this);
            });
        });

        function validate (input) {
            if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
                if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
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
</script>