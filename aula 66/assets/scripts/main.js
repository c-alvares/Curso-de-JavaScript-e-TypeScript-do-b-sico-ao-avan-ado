const cronometro = () => {
  const relogio = document.querySelector(".relogio");
  const iniciar = document.querySelector(".iniciar");
  let segundos = 0;
  let timer;

  const criarHoraDosSegundos = (segundos) => {
    const data = new Date(segundos * 1000); // recebe em milissegundos
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    });
  };

  const iniciaRelogio = () => {
    timer = setInterval(() => {
      segundos++;
      relogio.innerHTML = criarHoraDosSegundos(segundos);
    }, 1000);
  };

  document.addEventListener("click", (event) => {
    const element = event.target;

    if (element.classList.contains("zerar")) {
      setTimeout(() => {
        clearInterval(timer);
        relogio.innerHTML = "00:00:00";
        segundos = 0;
      });
      relogio.classList.remove("pausado");
    }
    if (element.classList.contains("iniciar")) {
      clearInterval(timer);
      iniciaRelogio();
      relogio.classList.remove("pausado");
      iniciar.innerText = "Iniciar";
    }
    if (element.classList.contains("pausar")) {
      clearInterval(timer);
      relogio.classList.add("pausado");
      iniciar.innerText = "Retomar";
    }
  });
};

cronometro();
