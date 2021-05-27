const Strings = (props) => {
    const td = props.string.map((scale, key) => {
        let scaleNote;
        if (scale) {
            if (scale === props.root) {
                scaleNote = <span className="root">{scale}</span>;
            } else {
                scaleNote = <span>{scale}</span>;
            }
        }
        return <td key={key}>{scaleNote}</td>
    });

    return (
        <tr>{td}</tr>
    );
}

export default Strings;