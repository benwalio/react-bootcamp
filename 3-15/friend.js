class Friend extends React.Component {
    render () {
        const {name, hobbies} = this.props;
        return (
            <div className="friend">
                <h1>{name}</h1>
                <ul>
                    {hobbies.map((h,index) => <li key={index}>{h}</li>)}
                </ul>
            </div>
        );
    }
}