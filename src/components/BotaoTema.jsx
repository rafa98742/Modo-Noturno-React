import React from 'react';
import { useTheme } from '../contexts/ThemeContext.jsx';

export default function BotaoTema(){
    const { tema, alternartema } = useTheme();

    const estiloBotao = {
        padding: '10px 20px',
        fontSize: '15px',
        fontWeight: 'bold',
        cursor: 'pointer',
        borderRadius: '8px',
        border: 'none',
        transition: 'all 0.3 ease',
        backgroudColor: tema === 'claro'? '#1e293b' : '#f8fafc',
        color: tema === 'claro' ? '#ffffff' : '#0f172a',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    };

    return (
        <button onClick={alterarTema} style={estiloBotao}> 
            {tema === 'claro'? 'Modo Escuro' : 'Modo Claro'}
        </button>
    );

}