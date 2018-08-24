$("document").ready(() => {
  $("form").submit(e => {
    e.preventDefault();
    Email.send(
      "edermarques96@gmail.com",
      "eder.marques@citi.org.br",
      "Contato Pop Up Commerce",
      "Nome: "+$('input[name=name]').val()+"\nEmail: "+$('input[name=email]').val()+"\nTelefone: "+$('input[name=phone]').val()+"\nInstagram: "+$('input[name=instagram]').val(),
      { token: "9cbd6d8c-f707-4e56-8578-0f1767063445" }
    );
    // console.log("Nome: "+$('input[name=name]').val()+"\nEmail: "+$('input[name=email]').val()+"\nTelefone: "+$('input[name=phone]').val()+"\nInstagram: "+$('input[name=instagram]').val());
  });
});

// Email.send(
//   "edermarques96@gmail.com",
//   "eder.marques@citi.org.br",
//   "Contato Pop Up Commerce",
//   "fewfjweuioj",
//   { token: "9cbd6d8c-f707-4e56-8578-0f1767063445" }
// );
