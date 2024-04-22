import React from 'react';
import ItemImg from './ItemImg';
import TextBig from './TextBig';


export default function Galery(){
    return(
        <div className="one-column content">
            <TextBig label="Galeria" />
            <div className="inner-container">
                <ItemImg src="https://static.portaldaindustria.com.br/portaldaindustria/noticias/media/imagem_plugin/baadk.jpg" label="Bob"/>
                <ItemImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu4vnXPY2P3Urmqq3TMEr37A7s1c7xnB3K62QugKeCfg&s" label="Mia"/>
                <ItemImg src="https://joseliamaria.com/wp-content/uploads/2019/06/roboo2381063010300627770.jpg" label="Tobi"/>
                </div>
                <div className='inner-container'>
                <ItemImg src="https://www.escolasesiba.com.br/media/1205/ftc-inovacao-1024x768.jpeg?width=500&height=375" label="Roberta"/>
                <ItemImg src="https://opopular.com.br/image/policy:1.3021546:1682260149/image.jpg" label="Yummi"/>
                <ItemImg src="https://static.portaldaindustria.com.br/portaldaindustria/noticias/media/imagem_plugin/whatsappimageat_MvXlWfn.jpg" label="Teo"/>
            </div>
        </div>
    )
}