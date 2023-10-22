document.getElementById('acceptBtn').addEventListener('click', function () {
  alert('A verdadeira fofura está na maneira como seu sorriso aquece meu coração, como seus olhos brilham com ternura e como sua presença faz cada momento mais especial!');
});

document.getElementById('rejectBtn').addEventListener('click', function () {
  setTimeout(function () {
    document.getElementById('rejectBtn').innerText = "Não existe essa possibilidade";
    document.getElementById('rejectBtn').disabled = true; // Desabilitar o botão após a alteração
  }, 1000); // 10 segundos
});
