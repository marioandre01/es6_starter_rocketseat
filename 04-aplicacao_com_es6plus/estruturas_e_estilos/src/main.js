import api from './api';

class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input[name=repository]');
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    setLoading(loading = true) {
        
        if(loading === true) {
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando'));
            loadingEl.setAttribute('id', 'loading');

            this.formEl.appendChild(loadingEl);
        }else{
            document.getElementById('loading').remove();
        }
    }

    async addRepository(event) {
        //preventDefault() não vai deixar o form ter o funcionamento comum que tem no html
        //que é de recarregar a página, enviar um metodo get, post ou qualquer outra coisa
        //Ele vai previnir que isso aconteça
        event.preventDefault();

        const repoInput = this.inputEl.value;

        if(repoInput === 0){
            //e nada foi digitado no input para por aqui o código
            return;
        }
        
        this.setLoading();

        try{

        
        const response = await api.get(`/repos/${repoInput}`);

        //console.log(response);

        const { name, description, html_url, owner: { avatar_url } } = response.data;

        this.repositories.push({
            /*
            name:'guia_git',
            description: 'Tire a sua ideia do papel e dê vida à sua startup',
            avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
            html_url: 'https://github.com/marioandre01/guia_git',
            */
           name,
           description,
           avatar_url,
           html_url

        });

        //apagar o conteudo digitado no input
        this.inputEl.value = '';

        //console.log(this.repositories);
        this.render();
        }catch(err) {
            alert("O repositório não existe!")
        }

        this.setLoading(false);
    }

    

    //apagar todo o conteudo da lisa e renderiza-lo do zero
    //vai percorrer o array mostrando todos os repositórios lá dentro
    render() {
        //para apagar todo o conteudo
        this.listEl.innerHTML = '';

        //percorrer os repositórios pelo array
        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);  
            //linkEl.target = '_blank';
            //linkEl.href = '#';      
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        });


    }
    
}

new App();