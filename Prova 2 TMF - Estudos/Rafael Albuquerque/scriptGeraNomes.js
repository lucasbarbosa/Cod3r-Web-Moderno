
function gerarNovoNome() {
    let firstName = ['Rafael', 'João', 'Pedro', 'Tiago', 'André', 'Mateus', 'Paulo', 'Messias', 'Adriano', 'Estevão', 'José', 'Augusto', 'Antonio', 'Maria', 'Marta', 'Soraia', 'Andressa', 'Helena', 'Carolina', 'Sandra', 'Luis', 'Rosa', 'Silvana'];
    let middleName = ['Silva', 'Pereira', 'Guimarãez', 'Domenico', 'Albuquerque', 'Finetti', 'Daga', 'Figueiredo', 'Maccri', 'Silva', 'Guzmão', 'Furtado', 'Neves', 'Aparecida', 'Duque', 'Santiago', 'Lemos', 'Heredia', 'Texeira', 'Souza', 'Sacramento', 'Virgulino', 'Nobrega'];
    let lastName = ['das Neves', 'Goulart', 'de Caminha', 'Da Silva', 'Da Costa', 'Ferreira', 'Rodriguez', 'Almeida', 'Alves', 'Carvalho', 'Araújo', 'Ribeiro', 'de Caminha', 'Da Silva', 'Da Costa', 'Ferreira', 'Rodriguez', 'Almeida', 'Alves', 'Carvalho', 'Araújo'];

    let indiciNome = Math.floor(Math.random() * 6) + 1;

    return firstName[indiciNome] + " " + middleName[indiciNome] + " " + lastName[indiciNome];
}