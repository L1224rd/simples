$("document").ready(() => {
  $("form").submit(e => {
    e.preventDefault();
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($('input[name=email]').val())) {
      $.post(
        "https://simples-email.herokuapp.com/",
        {
          data:
            "Nome: " +
            $("input[name=name]").val() +
            "\nEmail: " +
            $("input[name=email]").val() +
            "\nTelefone: " +
            $("input[name=phone]").val() +
            "\nInstagram: " +
            $("input[name=instagram]").val()
        },
        data => {
          console.log(data);
        }
      );
    } else {
      $('#error-email').show();
    }
  });
  $('.form-input').click(() => {
    $('#error-email').hide();
  });
  $("input[name=phone]").mask("(00) 0 0000-000");
});
