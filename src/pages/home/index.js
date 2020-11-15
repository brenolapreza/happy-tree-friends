import Button from '../../components/button';
import Nav from '../../components/nav'
import BackgroundMain from '../../images/background-main.jpg'
import './style.scss';


export default function Home(){
    return(
        <>
            <Nav/>
            <section>
                <div className="container">
                    <div className="col col-1">
                        <h1>ASSISTA AGORA</h1>
                        <p>HAPPY TREE FRIENDS</p>
                        <Button endereco="/login" value="ASSISTA AGORA"/>
                    </div>
                    <div className="col col-2">
                        <img src={BackgroundMain} alt=""/>
                    </div>
                </div>
            </section>     
        </>
    )
}