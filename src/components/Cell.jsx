

const Cell = (props) => {
    let state = props.state;
    let value = props.value;

    return<>
        <div className="minesweeper__row__cell"
        onClick={props.state == 'hidden' ? props.reveal : undefined}
        onContextMenu={(e) => {
            e.preventDefault();
            if (state != 'open') {
                props.flag(state);
            }
        }}>
        { state=='open' ?
            value=='m' ? 'O' : value : //open mines or numbers
            state=='flag' ? 'T' : '_' //flagged or hidden
        }
        </div>
    </>
}

export default Cell