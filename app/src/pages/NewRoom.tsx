import { Link } from 'react-router-dom'
import illustrationImg from '../assets/images/illustration.svg'
import '../styles/auth.scss'
import { Button } from '../components/Button'

export function NewRoom(){
    return (
        <div id='page-auth'>
            <aside>
                <img src={illustrationImg} alt="Ilustração de perguntas" />
                <strong>Crie salas de bate papo</strong>
                <p>Se comunique em tempo real sobre suas duvidas</p>
            </aside>
            <main>
                <div className='main-content'>
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input type="text" placeholder='Nome da sala' />
                        <Button type="submit">
                            Criar sala
                        </Button>
                    </form>
                    <p>Quer entrar em uma sala existente ?
                        <Link to="/">
                            clique aqui
                        </Link>
                    </p>
                </div>
            </main>
        </div>
    )
}