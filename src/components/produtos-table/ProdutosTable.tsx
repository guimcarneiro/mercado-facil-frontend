import React from 'react';
import { Produto } from '../../models';

import classes from './ProdutosTable.module.css';

interface ProdutosTableProps {
    produtos: Produto[]
}

const ProdutosTable = (props: ProdutosTableProps) => {

    const rows = props.produtos?.map(produto => {
        return (
        <tr>
            <td>{produto.id}</td>
            <td>{produto.nome}</td>
            <td>{produto.preco}</td>
            <td>{produto.codigoBarra}</td>
            <td>{produto.fabricante}</td>
            <td>{produto.categoria}</td>
            <td>{produto.situacao}</td>
        </tr>
        );
    })

    return (
        <table className={classes.ProdutosTable}>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Preço</th>
                <th>Código de Barras</th>
                <th>Fabricante</th>
                <th>Categoria</th>
                <th>Situação</th>
            </tr>
            {rows}
        </table>
    );

}

export default ProdutosTable;