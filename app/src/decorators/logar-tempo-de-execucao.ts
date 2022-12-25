export function logarTempoDeExecucao(emSegundos: boolean = false){
    //o dev pode escolher se quer em segundos ou milisegundos. e como padrão é milisegundos
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value;
        //usando ... podemos receber qualquer qtde de parametros
        descriptor.value = function(...args: Array<any>){
            let divisor= 1;
            let unidade = 'milisegundos';
            if(emSegundos){
                divisor = 1000;
                unidade = 'segundos';
            }
            const t1 = performance.now()
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now()
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1)/divisor} ${unidade}`)
            retorno //retorna o metodo original
        }
        return descriptor;
    }
}