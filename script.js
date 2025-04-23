function atualizarRelogio() {
    const agora = new Date();
    const horas = agora.getHours();
    // const minutos = agora.getMinutes();
    // const segundos = agora.getSeconds();

    const relogioDigital = document.getElementById("relogio-digital");
    relogioDigital.textContent = agora.toLocaleTimeString();

    const fundo = document.getElementById("fundo");
    const atividadeTexto = document.getElementById("atividade");
    let cor = "bg-gray-400";
    let atividade = "Descanso";

    if (horas >= 8 && horas < 12) {
      cor = "bg-blue-400";
      atividade = "08:00 - 12:00 (Estudo)";

    } else if (horas >= 13 && horas < 15) {
      cor = "bg-green-400";
      atividade = "13:00 - 15:00 (Labs)";

    } else if (horas >= 15 && horas < 18) {
      cor = "bg-red-400";
      atividade = "15:00 - 18:00 (Programação)";
    }

    fundo.className = `flex items-center justify-center min-h-screen transition-colors duration-500 ${cor}`;
    atividadeTexto.textContent = atividade;
  }

  setInterval(atualizarRelogio, 1000);
  window.onload = atualizarRelogio;