const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const minhaStrings = minhaString.trim()
console.log(minhaString.trim())

const tamanho = minhaString.length
console.log('A frase tem', tamanho, 'Caracteres!')

const mudar = minhaString.replaceAll('________', '“sticioso”')
console.log(mudar)