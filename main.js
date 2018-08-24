$("document").ready(() => {
  let flag = true;
  $("form").submit(e => {
    e.preventDefault();
    if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        $("input[name=email]").val()
      )
    ) {
      $("#error-email").show();
      flag = false;
    } else {
      flag = true;
    }
    if ($("input[name=phone]").val().length < 16) {
      $("#error-phone").show();
      return;
    }
    if (flag) {
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
          $("#sent-email").show();
          setTimeout(() => {
            $("#sent-email").hide();
          }, 3000);
        }
      );
    }
  });
  $(".form-input").click(() => {
    $("#error-email").hide();
    $("#error-phone").hide();
  });
  $("input[name=phone]").mask("(00) 0 0000-0000");
});
