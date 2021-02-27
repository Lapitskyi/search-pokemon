import './App.scss';
import Pokemon from "./component/Pokemon/Pokemon";


const App = () => {
    return (
        <div className="app-wrapper">
            <div className="container">
                <Pokemon/>
            </div>
        </div>
    )
}

export default App;
