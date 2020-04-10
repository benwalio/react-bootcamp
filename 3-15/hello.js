class Hello extends React.Component {
    static defaultProps = {
        from: "anon",
        bangs: 2
    }
    render () {
        let bangs = "!".repeat(this.props.bangs);
        return (
            <div className="hello">
                {console.log(this.props)}
                hello { this.props.to } from { this.props.from }{bangs}
                <img src={ this.props.img } alt=""/>
            </div>
        );
    }
}