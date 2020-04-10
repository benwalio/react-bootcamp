class App extends React.Component {
    render() {
        return <div className="app">
                <Hello />
                <Hello />
                <JSXDemo />
            </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));