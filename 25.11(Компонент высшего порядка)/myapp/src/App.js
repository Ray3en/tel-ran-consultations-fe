import { getModal } from './components/Modal/getModal';

function App() {

  const ModalError = getModal('red')
  const ModalSuccess = getModal('green')

  return (
    <div>
      <ModalError text={'Ошибка!'}/>
      <ModalError text={'Не авторизован'}/>
      <ModalError text={'Просто ошибка'}/>
      <ModalSuccess text ={'все ок'}/>
    </div>
  );
}

export default App;
