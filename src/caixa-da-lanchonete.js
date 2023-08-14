class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        let valorTotal = selectItens(itens);
        switch (metodoDePagamento) {
            case "dinheiro":
                valorTotal -= (valorTotal * 0.05);
                break;
            case "credito":
                valorTotal += (valorTotal * 0.03);
                break;
            case "debito":
                break;
            default:
                return "Forma de pagamento inválida!";
                break;
        }       
        return [metodoDePagamento, itens, valorTotal];
    }
    selectItens(itens){
        let valueItens = 0;
        if(itens.length == 0){
            return "Não há itens no carrinho de compra!";
        }
        for (let i = 0; i < itens.length; i++) {
            if(itens[i].slice(-1) == 0){
                return "Quantidade inválida!";
            }
            switch (itens[i]) {     //Calculo de valores de cada item
                case "cafe":
                    valueItens += 3.00 * itens[i].slice(-1);
                    break;
                case "chantily":
                    if (itens.include("cafe")) {
                        valueItens += 1.50 * itens[i].slice(-1);
                    }
                    else{
                        return "Item extra não pode ser pedido sem o principal";
                    }
                    break;
                    break;
                case "suco":
                    valueItens += 6.20 * itens[i].slice(-1);
                    break;
                case "sanduiche":
                    valueItens += 6.50 * itens[i].slice(-1);
                    break;
                case "queijo":
                    if(itens.include("sanduiche")){
                        valueItens += 2.00 * itens[i].slice(-1);
                    }
                    else{
                        return "Item extra não pode ser pedido sem o principal";
                    }
                    break;
                case "salgado":
                    valueItens += 7.25 * itens[i].slice(-1);
                    break;
                case "combo 1":
                    valueItens += 9.50 * itens[i].slice(-1);
                    break;
                case "combo 2":
                    valueItens += 7.50 * itens[i].slice(-1);
                    break;        
                default:
                    return "Item inválido!";
                    break;
            }
            
        }
        return valueItens;
    }

}

export { CaixaDaLanchonete };
