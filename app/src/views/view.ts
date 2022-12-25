export abstract class View<T>{
    //T (ou qualquer letra) é um tipo generico, ele evita erros de compatibilidade
    //uma classe abstrata só pode ser instaciada pela classe filha

    //private não deixa que os filhos acessem a variavel, mas protected permite que os filhos e somente eles acessem
    protected elemento: HTMLElement;

    constructor(seletor: string){
        const elemento = document.querySelector(seletor);
        if(elemento){
            this.elemento = elemento as HTMLElement;
        }
        else{
            throw Error(`Seletor ${seletor} não existe no DOM.`)
        }
    }
    //todo mundo é definido como public quando não definido
    //quando coloca ele como abstract, obriga o dev a implementar template
    protected abstract template(model: T): string;

    //@inspect()
    //@logarTempoDeExecucao(true)
    //metodo update - renderiza o template
    public update(model: T): void{
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }
} 