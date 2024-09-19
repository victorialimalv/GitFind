import { Header } from "../../Components/Header";
import background from '../../Assets/background.jpg';
import './styles.css';
import ItemList from "../../Components/ItemList";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="conteudo">
            <div className="background" style={{ backgroundImage: `url(${background})` }}>

                <div className="info">
                    <input placeholder="@username" name="usuario"/>
                    <button>Buscar</button>
                </div>

                <div className="perfil">
                <img className="profile" src="https://avatars.githubusercontent.com/u/133249763?v=4" alt="Perfil de Victoria Lima" />
                    <div>
                        <h3>Victoria Lima</h3>
                        <span>@victorialimalv</span>
                        <p>Descrição</p>
                    </div>
                </div>
                <hr />

                <div>
                    <h4 className="repositorio">Repositórios</h4>
                    <ItemList title="teste1" description="teste de descrição 1"/>
                    <ItemList title="teste1" description="teste de descrição 1"/>
                    <ItemList title="teste1" description="teste de descrição 1"/>
                    <ItemList title="teste1" description="teste de descrição 1"/>
                </div>

            </div>
            </div>
        </div>
    );
};

export default App;