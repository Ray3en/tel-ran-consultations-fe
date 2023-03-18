import './App.css'
import Block from './components/Block/Block'

function App(){
    return(
        <div>
            <Block color={'red'} size={'xl'} isCheck={true}/>
            <Block color={'blue'} size={'l'} isCheck={false}/>
            <Block color={'orange'} size={'m'} isCheck={false}/>
        </div>
    )
}

export default App