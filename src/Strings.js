const Strings = (props) => {
    const string = props.string;
    const td = string.map((scale, key) => {
        if (scale) {
            // if (scale === 'F' || scale === 'B') {
            //     return <td key={key}><span className="half">{scale}</span></td>
            // }
            return <td key={key}><span>{scale}</span></td>
        } else {
            return <td key={key}></td>
        }
    });

    return (
        <tr>{td}</tr>
    );
}

export default Strings;