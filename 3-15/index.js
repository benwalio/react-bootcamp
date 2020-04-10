class App extends React.Component {
    render() {
        return <div className="app">
            <Friend
                name="jawnny"
                hobbies={["jawning", "steakin", "beerin"]}
            />
            <Slots
                num={3}
            />
            <Slots
                num={3}
            />
            <Slots
                num={3}
            />
                <Hello 
                    to="ringo" 
                    from="paul" 
                    bangs={3}
                    img="https://cdn.pixabay.com/photo/2015/01/28/23/35/landscape-615429_1280.jpg"
                />
                <Hello to="cher" />
                <Slots 
                    num={3}
                />
            </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));