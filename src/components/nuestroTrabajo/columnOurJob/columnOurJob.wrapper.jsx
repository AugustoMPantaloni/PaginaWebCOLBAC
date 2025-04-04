
//Css
import "./OurJob.scss"


const ColumnOurJob = ({ tittle, content, imgSRC, idx }) =>{
    return(
        <div 
            className={ 
                'contenedorOurJob' + ( 
                    idx % 2 === 0 ? 
                    ' zebraEffect' : 
                    ''
                ) 
            }
        >
            {
                imgSRC ?
                <div> 
                    <img  className="iconoOurJob" src={imgSRC}/> 
                </div> :
                ''
            }
            {
                tittle ?
                <div className="contenedorTextoOurJob"> 
                    <h2>{ tittle }</h2>
                    <p>{ content }</p>
                </div> :
                ''
            }
        </div>
    )
}

export default ColumnOurJob