class CaixaDaLanchonete {
    calcularValorDaCompra(metodoDePagamento, itens) {
        
        let valorTotal = (this.selectItens(itens)); // Fixed: Call selectItens using 'this'
        
        if (typeof valorTotal === 'string') {
            return valorTotal; // Return error messages directly
        }
        
        switch (metodoDePagamento) {    // Apply discounts and corrections based on the payment method
            case 'dinheiro':
                valorTotal -= valorTotal * 0.05;
                break;
            case 'credito':
                valorTotal += valorTotal * 0.03;
                break;
            case 'debito':
                break;
            default:
                return 'Forma de pagamento inválida!'; // Error Message
            }
        
        const finalReturn = "R$ " + valorTotal.toFixed(2); // rounding and decimal spaces

        return finalReturn.replace('.', ',');
    }

    selectItens(itens) {
        var valueItens = 0;
        var validate = new Array();

        if (itens.length == 0) {
            return 'Não há itens no carrinho de compra!';
        }

        for (let i = 0; i < itens.length; i++) {
            let comma = itens[i].indexOf(",");
            if(itens[i].slice(0, comma) == 'cafe' || itens[i].slice(0, comma) == 'sanduiche') {
                validate.push(itens[i].slice(0, comma));
            }
        }

        for (let i = 0; i < itens.length; i++) {
            let comma = itens[i].indexOf(",");
            if (itens[i].slice(comma + 1) == 0) {      //dettect ilegal quantity and return error
                return 'Quantidade inválida!';
            }

            let itemName = (itens[i].split(" ").join("")).slice(0, comma); // Extract item name and standardizes itens
            let itemQuantity = parseInt(itens[i].slice(comma + 1)); // Extract item quantity

            switch (itemName) {     //Select prices by label
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
                case 'combo1':
                    valueItens += 9.50 * itemQuantity; 
                    break;
                case 'combo2':
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