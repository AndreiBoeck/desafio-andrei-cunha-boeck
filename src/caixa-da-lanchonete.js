class CaixaDaLanchonete {
    calcularValorDaCompra(metodoDePagamento, itens) {
        let valorTotal = (this.selectItens(itens)); // Fixed: Call selectItens using 'this'
        
        if (typeof valorTotal === 'string') {
            return valorTotal; // Return error messages directly
        }
        else{
            switch (metodoDePagamento) {
                case 'dinheiro':
                    valorTotal -= valorTotal * 0.05;
                    break;
                case 'credito':
                    valorTotal += valorTotal * 0.03;
                    break;
                case 'debito':
                    break;
                default:
                    return 'Forma de pagamento inválida!';
            }
        }
        const finalReturn = "R$ " + valorTotal.toFixed(2);

        return finalReturn.replace('.', ',');
    }

    selectItens(itens) {
        var valueItens = 0;
        var validate = new Array();

        if (itens.length == 0) {
            return 'Não há itens no carrinho de compra!';
        }

        for (let i = 0; i < itens.length; i++) {
            if(itens[i].slice(0, -2) == 'cafe' || itens[i].slice(0, -2) == 'sanduiche') {
                validate.push(itens[i].slice(0, -2));
            }
        }

        for (let i = 0; i < itens.length; i++) {
            if (itens[i].slice(-1) == 0) {
                return 'Quantidade inválida!';
            }

            let itemName = itens[i].slice(0, -2); // Extract item name
            let itemQuantity = parseInt(itens[i].slice(-1)); // Extract item quantity

            switch (itemName) {
                case 'cafe':
                    valueItens += 3.00 * itemQuantity; 
                    break;
                case 'chantily':
                    if (validate.includes("cafe")) {
                        valueItens += 1.50 * itemQuantity; 
                    } else {
                        return 'Item extra não pode ser pedido sem o principal';
                    }
                    break;
                case 'suco':
                    valueItens += 6.20 * itemQuantity; 
                    break;
                case 'sanduiche':
                    valueItens += 6.50 * itemQuantity; 
                    break;
                case 'queijo':
                    if (validate.includes("sanduiche")) {
                        valueItens += 2.00 * itemQuantity; 
                    } else {
                        return 'Item extra não pode ser pedido sem o principal';
                    }
                    break;
                case 'salgado':
                    valueItens += 7.25 * itemQuantity; 
                    break;
                case 'combo 1':
                    valueItens += 9.50 * itemQuantity; 
                    break;
                case 'combo 2':
                    valueItens += 7.50 * itemQuantity; 
                    break;
                default:
                    return 'Item inválido!';
            }
        }

        return valueItens;
    }
}

export { CaixaDaLanchonete };