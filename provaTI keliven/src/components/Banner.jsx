import React from 'react';
import TextBig from './TextBig';



export default function Banner(){
    return(
        <div className='banner container'>
            <div className="two-column content">
                <div className="inner-content">
                    <TextBig label="Evento Sesi de robotica"/>
                    <ul>
                        <li><strong>Venha participar do nosso evento de robotica do sesi</strong></li>
                        <li><strong>Local</strong>: Sesi, São José</li>
                        <li><strong>Horário:</strong> 08:00 às 12:00</li>
                        <li><strong>Data:</strong> 04/05/2024</li>
                    </ul>
                </div>
            </div>
            <div className="two-column content">
                <img src="https://static.portaldaindustria.com.br/media/filer_public_thumbnails/filer_public/53/27/53275665-5b44-4a76-9637-5d4e4692e19d/selo-ftc.png__359x100_q85_crop_subsampling-2_upscale.png" alt="robotica" srcset="" />
            </div>
        </div>
    )
}