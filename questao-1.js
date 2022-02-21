function construirEscada(numero) {
    for (let i = 0; i < numero; i++) {
      let degrau = ''
      for (let j = numero; j > 0; j--) {
        if (j <= i + 1) {
          degrau += '*'
        } else {
          degrau += ' '
        }
      }
      console.log(degrau)
    }
  }
  
  construirEscada(6)