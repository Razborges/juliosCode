import React from 'react';
import Title from './title';

export default () => (
    <div className="o-header">
        <div>
            <Title title={'Código de Júlio César'} />
        </div>
        <div>
            <ol>
                <li>Escolha o valor de deslocamento.</li>
                <li>Digite a sua mensagem.</li>
                <li>Clique no botão para executar.</li>
                <li>Use somente as letras do alfabeto, sem acentuação.</li>
            </ol>
        </div>
    </div>
)