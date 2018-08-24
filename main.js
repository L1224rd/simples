$("document").ready(() => {
  $("form").submit(e => {
    e.preventDefault();
    $.post('https://simples-email.herokuapp.com/', {
      data: "Nome: "+$('input[name=name]').val()+"\nEmail: "+$('input[name=email]').val()+"\nTelefone: "+$('input[name=phone]').val()+"\nInstagram: "+$('input[name=instagram]').val()
    }, (data) => {
      console.log(data);
    });
  });
});