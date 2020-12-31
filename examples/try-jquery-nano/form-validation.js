// Example starter JavaScript for disabling form submissions if there are invalid fields
// https://github.com/twbs/bootstrap/tree/main/site/content/docs/5.0/examples/checkout
; (function (undefined) {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    $$('.needs-validation').on('submit', function (e) {
        var $form = e.target;
        if (!$form.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
        }

        $form.classList.add('was-validated');
    });

})();