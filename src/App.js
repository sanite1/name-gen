
import { useEffect, useState } from "react";
import HomeBody from "./Components/HomeBody";
import Navbar from "./Components/Navbar";

const App = () => {
    const [data, setData] = useState("");

    useEffect(() => {

        fetch("/api")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data.message);            
            })
        console.log(data);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="App-wrapper">
            <header className="App-header">
                <Navbar />
            </header>
            <section className="homeIntro">
                <HomeBody data={data} />

            </section>
            <p className="copyright">Copyright 2022. Sanni Collins</p>
        </div>
    );

}


export default App;