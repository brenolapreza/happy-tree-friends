import './style.scss';
import './style.scss'
export default function Nav(){
    return(
        <nav>
            <div className="container">
                <div>
                    <a href="/"><h2>HAPPY</h2></a>
                </div>
                <div>
                    <ul>
                        <li><a href="/login">LOGIN</a></li>
                        <li><a href="/register">REGISTER</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}