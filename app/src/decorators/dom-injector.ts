export function domInjector(seletor: string){
    return function(target: any, propertyKey: string){
        console.log(`Modificando prototype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}`)
        
        let elemento: HTMLElement;

        const getter = function(){
            //evita ficar buscando toda hora o elemento no DOM. Está criando um cache para essa variável
            if(!elemento){
                elemento = <HTMLElement>document.querySelector(seletor);
                console.log(`buscando elemento do DOM com o seletor ${seletor} para injetar em ${propertyKey}`)
            }
            return elemento;
        }
        //quando as propriedades inputData (etc) forem acessadas elas vão executar o getter
        //precisa fazer isso, caso contrário não irá funcionar como esperado, pq ele não vai conseguir identificar o seletor sendo passado
        Object.defineProperty(target, propertyKey, {get: getter});
    }
}