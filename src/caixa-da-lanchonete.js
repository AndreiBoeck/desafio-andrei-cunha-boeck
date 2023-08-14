class CaixaDaLanchonete {
    calcularValorDaCompra(metodoDePagamento, itens) {
        const valorTotal = this.selectItens(itens); // Fixed: Call selectItens using 'this'
        
        if (typeof valorTotal === 'string') {
            return valorTotal; // Return error messages directly
        }

        switch (metodoDePagamento) {
            case "dinheiro":
                valorTotal -= valorTotal * 0.05;
                break;
            case "credito":
                valorTotal += valorTotal * 0.03;
                break;
            case "debito":
                break;
            default:
                return "Forma de pagamento inválida!";
        }

        return [metodoDePagamento, itens, valorTotal];
    }

    selectItens(itens) {
        let valueItens = 0;

        if (itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        }

        for (let i = 0; i < itens.length; i++) {
            if (itens[i].slice(-1) == 0) {
                return "Quantidade inválida!";
            }

            const itemName = itens[i].slice(0, -2); // Extract item name
            const itemQuantity = parseInt(itens[i].slice(-1)); // Extract item quantity

            switch (itemName) {
                case "cafe":
                    valueItens += 3.00 * itemQuantity; 
                    break;
                case "chantily":
                    if (itens.includes("cafe")) {
                        valueItens += 1.50 * itemQuantity; 
                    } else {
                        return "Item extra não pode ser pedido sem o principal";
                    }
                    break;
                case "suco":
                    valueItens += 6.20 * itemQuantity; 
                    break;
                case "sanduiche":
                    valueItens += 6.50 * itemQuantity; 
                    break;
                case "queijo":
                    if (itens.includes("sanduiche")) {
                        valueItens += 2.00 * itemQuantity; 
                    } else {
                        return "Item extra não pode ser pedido sem o principal";
                    }
                    break;
                case "salgado":
                    valueItens += 7.25 * itemQuantity; 
                    break;
                case "combo 1":
                    valueItens += 9.50 * itemQuantity; 
                    break;
                case "combo 2":
                    valueItens += 7.50 * itemQuantity; 
                    break;
                default:
                    return "Item inválido!";
            }
        }

        return valueItens;
    }
}

export { CaixaDaLanchonete };