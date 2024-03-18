import { useNavigate } from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleImg from '../assets/images/google-icon.svg'
import '../styles/auth.scss'
import { Button } from '../components/Button'

export function Home(){
    const navigate = useNavigate();


    function navigateToNewRoom(){
        navigate('/rooms/new')
    }


    return (
        <div id='page-auth'>
            <aside>
                <img src={illustrationImg} alt="Ilustração de perguntas" />
                <strong>Crie salas de bate papo</strong>
                <p>Se comunique em tempo real sobre suas duvidas</p>
            </aside>
            <main>
                <div className='main-content'>
                    <img src={logoImg} alt="Social Network" />
                    <button onClick={navigateToNewRoom} className='create-room'>
                        <img src={googleImg} alt="Google logo" />
                        Criar sala com Google
                    </button>
                    <div className='separator'>Ou entre em uma sala</div>
                    <form>
                        <input type="text" placeholder='Digite o código da sala' />
                        <Button type="submit">
                            Entrar
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}