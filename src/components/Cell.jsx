

const Cell = (props) => {
    let state = props.state;
    let value = props.value;
    let chord = props.chord;

    return<>
        <div className="minesweeper__row__cell"
        onClick={state == 'hidden' ? props.reveal : chord == 0 && value != 'm' && value != 0 ? props.flagReveal : undefined }
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