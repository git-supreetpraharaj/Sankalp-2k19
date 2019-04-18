$(document).ready(function() {
    $("#sankalp").click(function(){
            window.location.href="main.html";
          })
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Please enter your Name'
                    }
                }
            },
            college_name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Please enter your Name'
                    }
                }
            },
            college_city: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Please enter your Name'
                    }
                }
            },
			
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please enter your Email Address'
                    },
                    emailAddress: {
                        message: 'Please enter a valid Email Address'
                    }
                }
            },
            contact_no: {
                validators: {
                  stringLength: {
                        min: 10, 
                        max: 10,
                    },
                    notEmpty: {
                        message: 'Please enter your Contact No.'
                     }
                }
            },
			 batch: {
                validators: {
                    notEmpty: {
                        message: 'Please select your Department/Office'
                    }
                }
            },
            }
        })
        .on('success.form.bv', function(e) {
            $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');
            // Use Ajax to submit form data
            var url = "https://script.google.com/macros/s/AKfycbxTgTYeMV1_4TpfA_9Gg5px8UP5ozmp2weeiYHTcVlwWiEhofI/exec";
            var redirectUrl = 'http://localhost/Sankalp-2k19/Index.html';

            var name = $("#name").val();
            var batch = $("#batch option:selected").text();
            var email = $("#email").val();
            var contact = $("#contact").val();
            var clg_cty = $("#college_city").val();
            var clg_name = $("#college_name").val();
            if ($('#accomodation').is(":checked"))
            {
                var acc = 'YES';
            }
            else
            {
                var acc = 'NO';
            }
            
            var url = url + "?callback=ctrlq&name=" + name + "&batch=" + batch + "&email=" + email + "&contact=" + contact + "&college_name=" + clg_name + "&college_city=" + clg_cty + "&accomodation=" + acc + "&action=insert";
            var request = jQuery.ajax({
                crossDomain: true,
                url: url,
                method: "GET",
                dataType: "jsonp",
                beforeSend: function(){
                     $("#loading").show();
                   },
                complete: function(){
                     $("#loading").hide();
                   }

            });


        });

    
});

function ctrlq(e){
    if(new String(e.result)=="SUCCESS"){
        $('#success_message').slideDown({ opacity: "show" }, "slow").delay(2000).fadeOut("slow");
        Email.send({
            SecureToken : "8d2b92b1-0e5a-432a-b20b-f80a17e49984",
            To : e.email,
            From : "praharaj.supreet@gmail.com",
            Subject : "SANKALP 2k19 REGISTRATION",
            Body : "Thank You for registrating with us. We hope to provide you with the most amazing experience. Your reg id is "+e.reg_id+ ". For any queries please reply back to this mail."
        }).then(
          message => alert(message)
        );
    }
    else if(e.result=="ID_EXIST"){
        $('#fail_message').slideDown({ opacity: "show" }, "slow").delay(2000).fadeOut("slow");   
    }


    
    //setTimeout(function() {
    //  window.location.href = "http://localhost/Sankalp-2k19/Index.html";
    //}, 2000);
}