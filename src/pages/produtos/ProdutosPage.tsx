import React, { useEffect, useState } from 'react';
import { getProdutos } from '../../api';
import { DefaultPageTemplate, ProdutosTable } from '../../components';
import { Produto } from '../../models';

import classes from './ProdutosPage.module.css';

const ProdutosPage = () => {

    const [produtos, setProdutos] = useState<Produto[]>([]);

    useEffect(() => {
        getProdutos()
            .then(res => {
                console.log(res);
                setProdutos(res)})
            .catch((err) => console.log(err));
    }, []);

    return (
        <DefaultPageTemplate
            title={"Produtos"}
            subtitle={"Aqui se encontra todos os produtos cadastrados"}>
            <div className={classes.ProdutosTableContainer}>
                <ProdutosTable produtos={produtos} />
            </div>
        </DefaultPageTemplate>
    );
}

export default ProdutosPage;