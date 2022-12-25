import { escape } from "../decorators/escape.js";
import { Negociacoes } from "../models/negociacoes.js"; //conferir se vem o .js
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes>{
    @escape
    //metodo template - declara o template do view
    protected template(model: Negociacoes) : string{
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${model.lista().map(negociacao => {
                    return `
                        <tr>
                            <td>${this.formatar(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>
                    `;
                }).join('')}
            </tbody>
        </table>
        `;
    }
    //metodo private só pode ser acessado por ele. Assim evita-se que outros devs utilizem ele
    private formatar(data: Date): string{
        return new Intl.DateTimeFormat().format(data)
    }
}