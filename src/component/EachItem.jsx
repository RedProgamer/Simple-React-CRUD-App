function EachItem(props) {

    const onEditClickHandler = () => {
        // console.log('Calling from eachItem : ' + props.id);
        props.onEditHandler(props.id);
    };

    const onDeleteClickHandler = () => {
        // console.log('Calling from eachItem : ' + props.id);
        props.onDeleteHandler(props.id);
    };

    return (
        <li key={props.id}>{props.name} <button onClick={onEditClickHandler}>Edit</button><button onClick={onDeleteClickHandler}>Delete</button></li>
    );
}

export default EachItem;