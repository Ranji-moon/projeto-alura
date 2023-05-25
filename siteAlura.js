const users = {
    nome: '',
    usuario: '',
    senha: '',
    idade: '',
    peso:'',
    tipoSanguineo:'',
    login: false
}

//array de objetos dos usuarios
let arrayUsers = [];

function startBanco() {

    let opção = 999

    while (opção !== 0) {
        
        let result;

        switch (opção) {
            case 1:
                result = register();
                    if (!result) {
                        alert('não foi possivel cadastrar');
                    } else{
                        alert('usuario cadastrado com sucesso 👻');
                    };
                break;
            case 2:
                result = login();
                if(!result) {
                    alert('Você precisa se cadastrar para entra.')
                } else {
                    alert('usuario logado com sucesso')
                };
                break;
            case 999:
                    alert('Voce precisa estar logado para entrar \n' + 'para acessar o menu principal \n' + 
                    'caso ainda não tenha usuario cadastrado, utilize a opção 1 do menu\n' 
                    + 'e faça seu registro') 
                break;
            case 3:
                result = esqueciSenha();
                if(result) {
                    alert('Senha ou usuario incorretos')
                } else {
                    alert(`Seja bem vindo(a) ${usersArray[i].nome}`)
                };
                break;
                default:
                    alert('Opção não encontrada')
                    break;

        }

        opção = Number(prompt(
            'Menu:\n' + 
            '1 - cadastrar:\n' + 
            '2 - login:\n' +
            '3 - Recuperar senhs:\n' +
            '0 - sair'

            )
        )

    }

}


//cadastrando/registrando usuarios
function register() {

    let result = false;

        users.nome            = prompt('nome:')
        users.usuario         = prompt('usuario:')
        users.senha           = prompt("senha: ")
        users.idade           = prompt('idade:')
        users.peso            = prompt('peso:')
        users.tipoSanguineo   = prompt('tipoSanguineo:')

        if( users.nome !== '' && users.senha !== '') {
            usersArray.push(users);
            result = true
        } 

            return result
        

}

//logando usuarios
function login() {
    let usuario      = prompt('digite seu usuario')
    let senha        = prompt('difite sua senha')

    return validateLogin(usuario, senha);

}

function validateLogin(usuario, senha) {
    let result = false;
    for(let i = 0; i < usersArray.length; i++) {
        console.log(usersArray[i]);
        if(usersArray[i].usuario === usuario 
            && usersArray[i].senha === senha); {
            result = true;
            usersArray[i].logado = true
        }
    }
        return result;
}


//recuperando senha
function esqueciSenha() {
    let usuario      = prompt('digite seu usuario')
    let senha        = prompt('digite sua nova senha')
    if(usersArray[i].usuario !== usuario 
        && usersArray[i].senha !== senha); {
        result = true;
        usersArray[i].naoLogado = false;
    }
    
        return result;
}

//chamada de função; iniciando sistema
startBanco()