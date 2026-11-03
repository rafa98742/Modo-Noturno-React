import React, { creatContext, useState, useContext } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }){
    const [tema, setTema ] = useState ('claro');

    const alternarTema = function(){
        setTema(function(temaAtual){
            temaAtual === 'claro' ? 'escuro' : 'claro';       
        });
    };

    return(
        <ThemeContext.Provider value={{ tema, alternarTema }}>
            { children }
        </ThemeContext.Provider>
    );    

};

   export function useTheme(){
        const context = useContext(ThemeContext);
        if(!context){
            throw new Error('UseTheme deve ser usado de um ThemeProvider')
        }
        return context;
    };