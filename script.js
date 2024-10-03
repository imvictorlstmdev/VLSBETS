// Interatividade dos botões de aposta
const betButtons = document.querySelectorAll('.btn-primary');

betButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('Aposta registrada com sucesso!');
    });
});
