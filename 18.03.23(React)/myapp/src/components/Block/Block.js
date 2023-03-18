import block from './Block.module.css'
import ElemPng from './media/image.jpg'
import { ReactComponent as IconComponent } from './media/icon.svg'

// function Block(){

//     return(
//         <div>
//             <img src={ElemPng}/>
//             <IconComponent/>
//         </div>
//     )
// }

// export default Block


function Block(props){

    const {color, size, isCheck} = props

    return(
        <div
            className={`${block.block_item} ${block[`${size}`]}`} 
            id ={(isCheck) ? 'elem_true' : 'elem_false'}
            style={{color: color}}>
            <p>Block</p>

            {(isCheck) ? <p>Параграф</p> : ''}
        </div>
    )
}

export default Block

