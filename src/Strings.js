const Strings = (props) => {
    const string = props.string;
    const td = string.map((scale, key) => <td key={key}>{scale}</td>);

    return (
        <tr>{td}</tr>
    );
}

export default Strings;