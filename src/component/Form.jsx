import { useState, useEffect } from 'react';

function Form(props) {
    const [item, setItem] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        if(item.trim().length <= 0) {
            setIsFormValid(false);
        }else {
            setIsFormValid(true);
        }
    }, [item]);

    const submitHandler = (event) => {
        event.preventDefault();

        if(isFormValid) {
            const newItem = {
                id: Number(Math.random().toFixed(4).toString()),
                item: item,
            }
    
            props.onAddNewItem(newItem);
            setItem('');
        }
    };

    const keyStrokeHandler = (event) => {
        event.preventDefault();
        setItem(event.target.value);
    };

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="item">Item : </label>
            <input type="text" name="item" id="item" value={item} onChange={keyStrokeHandler}/>
            <button type="submit">Add+</button>
        </form>
    );
}

export default Form;