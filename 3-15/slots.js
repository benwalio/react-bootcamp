class Slots extends React.Component {
    render () {
        let opts = ["🍎", "🍒", "🍇"];
        // let opts = ["🍇"];
        let spin = [];
        let winner = true;
        for (let i = 0; i < this.props.num; i++) {
            spin[i] = opts[Math.floor(Math.random() * opts.length)];
            if (spin [i-1] && spin[i-1] !== spin[i]) {
                winner = false;
            }
        }
        return (
            <div className="slots">
                <p style={{ fontSize: '40px', backgroundColor: 'purple' }}>{spin}</p>
                <p className={ winner ? 'slots-winner' : 'slots-loser'}>{ winner ? 'huzzah!' : 'nah'}</p>
            </div>
        )
    }
}