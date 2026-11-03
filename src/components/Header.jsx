import React from "react";
import BotaoTema from "./BotaoTema";
import { useTheme } from '../contexts/ThemeContext.jsx';

export default function Header(){
    const { tema } = useTheme();

    const estiloHeder = {
        display: 'flex',
        justifyContent: 'space-between',
        alingItens: ' center',
        padding: '15px 30px',
        borderBotton: tema === 'claro' ? '1px solid #e2e8f0' : '1px solid #334155',
        backgroudColor: tema === 'claro' ? '#ffffff' : '#1e293b',
        transition: 'all 0.3 ease',

    };

    return(
        <header style={estiloHeder}>
            <h2 style={{  margin: 0, fontSize: '20px' }}> Modo Noturno e Modo Claro</h2>
            <BotaoTema/>
        </header>
    )
}