import React, { useEffect, useState } from 'react';
import './styles.css';


function Sobre() {


    return (
        <div >
            <h1>SOBRE 🧨</h1>
            <div className='divPrincipal'>
                <div className='imagemNome'>
                    <img src="https://midias.correiobraziliense.com.br/_midias/jpg/2023/07/11/1000x1000/1_manoel_gomes_1_76952-28482348.jpeg?20230711142508?20230711142508" height={200} width={200}/>
                    <h2>Mateus Fin</h2>
                    <p>Garoto de programa</p>
                </div>
                <div className='biografia'>
                    <h3>Biografia</h3>
                    <p> "NOME", de 20 anos, é um estudante de Engenharia de Software apaixonado por tecnologia e programação. Desde jovem, sempre foi curioso sobre 
                        como os sistemas funcionam, o que o levou a se destacar em seus estudos. Além da universidade, ele participa de comunidades de desenvolvedores 
                        e hackathons, buscando sempre se aprimorar. Com uma mente analítica e criativa, "NOME" já está construindo sua trajetória como futuro engenheiro 
                        de software, determinado a desenvolver soluções inovadoras que impactem a sociedade.</p>
                </div>
            </div>
        </div>
    );
}

export default Sobre