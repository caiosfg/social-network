import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleImg from '../assets/images/google-icon.svg'
import '../styles/auth.scss'

export function Home(){
    return (
        <div id='page-auth'>
            <aside>
                <img src={illustrationImg} alt="Ilustração de perguntas" />
                <strong>Crie salas de bate papo</strong>
                <p>Se comunique em tempo real sobre suas duvidas</p>
            </aside>
            <main>
                <div>
                    <img src={logoImg} alt="Social Network" />
                    <button>
                        <img src={googleImg} alt="Google logo" />
                        Criar sala com Google
                    </button>
                    <div>Ou entre em uma sala</div>
                    <form>
                        <input type="text" placeholder='Digite o código da sala' />
                        <button type="submit">
                            Entrar
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}