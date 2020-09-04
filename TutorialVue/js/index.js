$(document).ready(function() { // executa asim que toda a pagina tiver terminado de carregar
     /**
      * Add evento de click
      */
     function onAdd() { //adiciona novos livros na lista
           var $ul, li, $li, $label, $div, livro, autor;
           livro = $('.js-novo-livro').val(); // atribui à variável livro o nome do livro digitado pelo usuário (campo de textode classe css js-novo-livro)
           autor = $('.js-novo-autor').val();

           if (livro === '') {
                  return; // impede que itens vazios sejam adicionados à lista
           }

           $ul = $('ul');
           $li = $('<li>').appendTo($ul);
           $div = $('<div>')
                  .addClass('checkbox')
                  .appendTo($li);

           $label = $('<label>').appendTo($div);
           $('<input>')
                  .attr('type', 'checkbox')
                  .addClass('js-livro')
                  .attr('name', 'list')
                  .click(toggleRemovido)
                  .appendTo($label);

           $('<big>')
           		  .appendTo($label)
           		  .append(livro);

           $label.append(" - ");

           $('<small>')
           		  .appendTo($label)
           		  .append(autor);

           $('.js-novo-livro, .js-novo-autor').val(''); // limpa o campo de texto para próxima digitação
     }

     /**
      * Evento de click do checkbox
      */
     function toggleRemovido(ev) { 
           var $el;
           $el = $(ev.currentTarget);
           $el.closest('li').toggleClass('removido'); // impõe ou remove a classe CSS "removido" ao objeto clicado, dependendo de seu estado
     }
     $('.js-add').click(onAdd); // atrela função de adicionar livro à classe do botão de adicionar(a todos os botôes dessa classe)
     $('.js-livro').click(toggleRemovido); // atrela função de atualizar estado do livro à classe do botão de checkbox de cada livro
 });
