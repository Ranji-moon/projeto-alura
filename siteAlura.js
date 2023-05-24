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
let arrayUsers = []

function startBanco() {

    let opção = 999

    while (opção !== 0) {
        { 
        
        let result;

        switch (opção) {
            case 1:
                result = register();
                    if (!result) {
                        alert('não foi possivel cadastrar');
                    } else{
                        alert('usuario cadastrado com sucesso 👻');
                    }
    
                break;
            case 2:
                result = login();
                if(!result) {
                    alert('Você precisa se cadastrar para entra.\n',
                        'Escolha a opção 1')
                } else {
                    alert('usuario logado com sucesso')
                }
                break;
            case 999:
                result = menu();
                    alert('Voce precisa estar logado \n' + 'para acessar o menu principal \n\n' + 
                    'caso ainda não tenha usuario cadastrado, utilize a opção 2 do menu\n' 
                    + 'e faça seu registro') 
                break;
                default:
                    alert('Opção não encontrada')
                    break;

             }
        }

        opcão = Number(
            prompt(
                'Escolha uma opção:\n' + 
                '1 - login:\n' + 
                '2 - cadastrar:\n' +
                '3 - esqueci minhas credenciais:\n' +
                '0 - sair'
            )
        )

    }


}


function register() {

    let result = false;

        users.nome            = prompt('nome:')
        users.usuario         = prompt('usuario:')
        users.senha           = prompt('senha:')
        users.idade           = prompt('idade:')
        users.peso            = prompt('peso:')
        users.tipoSanguineo   = prompt('tipoSanguineo:')

        if( users.nome !== '' && users.senha !== '') {
            usersArray.push(users);
            result = true
        } 

            return result
        

}

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


function menu() {
    while (opção !== 0) {
        result = true
    }
}


//chamada de função; iniciando sistema
startBanco()