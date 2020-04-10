function getMood() {
    const moods = [ 'angry', 'hungry', 'silly', 'happy', 'lazy' ];
    return moods[Math.floor(Math.random() * moods.length)];
}

function getNum() {
    return Math.ceil(Math.random() * 10);
}

class JSXDemo extends React.Component {
    render () {
        const num = getNum();
        return (
            <div className="JSXDemo">
                <h1>blah</h1>
                <h3>My current mood is: {getMood()}</h3>
                <h4>your number is: {num}</h4>
                <p>{ num === 7 ? 'Congrats!' : 'Unlucky'}</p>
            </div>
        );
    }
}