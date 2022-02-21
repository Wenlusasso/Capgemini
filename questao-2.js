function temCaractereEspecial(arrayCaracteres) {
  for (let i = 0; i < arrayCaracteres.length; i++) {
    if (
      arrayCaracteres[i] === '!' ||
      arrayCaracteres[i] === '@' ||
      arrayCaracteres[i] === '#' ||
      arrayCaracteres[i] === '$' ||
      arrayCaracteres[i] === '%' ||
      arrayCaracteres[i] === '^' ||
      arrayCaracteres[i] === '&' ||
      arrayCaracteres[i] === '*' ||
      arrayCaracteres[i] === '(' ||
      arrayCaracteres[i] === ')' ||
      arrayCaracteres[i] === '-' ||
      arrayCaracteres[i] === '+'
    ) {
      return true
    }
  }
  return false
}

function senhaForte(senha) {
  const arrayCaracteres = senha.split('')

  // metodo que verifica se pelo menos um elemento no array satisfaz a condição
  const temMaiuscula = arrayCaracteres.some(
    (char) => char === char.toUpperCase()
  ) // true or false
  const temMinuscula = arrayCaracteres.some(
    (char) => char === char.toLowerCase()
  )
  // como está negado, vai dar verdadeiro se for um número. isNaN = is not a number
  // pesquisar -> como verificar se um caractere é um numero em Java
  const temDigito = arrayCaracteres.some((char) => !isNaN(char))

  let criteriosQueFaltam = 4

  if (temMaiuscula) criteriosQueFaltam -= 1

  if (temMinuscula) criteriosQueFaltam -= 1

  if (temCaractereEspecial(arrayCaracteres)) criteriosQueFaltam -= 1

  if (temDigito) criteriosQueFaltam -= 1

  const minimoCaracteres = 6 - arrayCaracteres.length
  if (criteriosQueFaltam <= minimoCaracteres) return minimoCaracteres
  if (arrayCaracteres.length + criteriosQueFaltam >= 6)
    return criteriosQueFaltam
  // se os criterios  que faltam + senha atual for MENOR que 6
  // exemplo: senha = 12
  // falta uma letra maiuscula, uma minuscula e um caractere especial
  // minimo de caracteres = 1
  // criterios que faltam = 3
  // retorna 4
  return criteriosQueFaltam + minimoCaracteres
}

console.log(senhaForte('Yu3'))
