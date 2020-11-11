import axios from 'axios';

class Api {
    static async getUserInfo(username){
        try{
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        }catch (err) {
            console.warn('Erro na API');
        }
        

        

    }
}

//todas as funções do axios retornam uma promise, por isso é possível usar a sintaxe do async/await

Api.getUserInfo('marioandre01');
Api.getUserInfo('jhgdasghdghasg');