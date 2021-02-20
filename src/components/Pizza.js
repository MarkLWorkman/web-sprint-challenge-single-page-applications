import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Pizza = (props) => {
    let history = useHistory()
    const [form, setForm] = useState({
        name: '',
        sauce: 'red',
        quantity: '1',
    })

    const handleCheck = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.checked
        })
    }

    const handleForm = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div>
            <h2>Construct Your Pizza</h2>
            <form onSubmit={ (event) => {
                event.preventDefault()
                console.log(form)
                props.setOrder(form)
                history.push('/confirmation')
            }}>
                <input required
                    type='text'
                    name='name'
                    placeholder='Name'
                    onChange={handleForm}
                    value={form.name}
                    min={2}
                />
            <h3>Select Your Size</h3>
            <select required
                name='size'
                placeholder='Select Size'
                onChange={handleForm}>
                <option value='small'>Small</option>
                <option value='medium'>Medium</option>
                <option value='large'>Large</option>
                <option value='extra large'>Extra Large</option>
            </select>
            <h3>Choose Your Sauce</h3>
                <input
                    type='radio'
                    name='sauce'
                    value='red'
                    id='red-sauce'
                    checked={form.sauce==='red'}
                    onChange={handleForm}
                />
                <label htmlFor='red-sauce'>Red Sauce</label>
                <input
                    type='radio'
                    name='sauce'
                    value='white'
                    id='white-sauce'
                    checked={form.sauce==='white'}
                    onChange={handleForm}
                />
                <label htmlFor='white-sauce'>White Sauce</label>
            <h3>Choose Your Toppings</h3>
                <input
                    type='checkbox'
                    name='pepperoni'
                    value='pepperoni'
                    checked={form.pepperoni===true}
                    onChange={handleCheck}
                />
                <label htmlFor='pepperoni'>Pepperoni</label>
                <input
                    type='checkbox'
                    name='mushrooms'
                    value='mushrooms'
                    checked={form.mushrooms===true}
                    onChange={handleCheck}
                />
                <label htmlFor='mushrooms'>Mushrooms</label>
                <input
                    type='checkbox'
                    name='green_peppers'
                    value='green_peppers'
                    checked={form.green_peppers===true}
                    onChange={handleCheck}
                />
                <label htmlFor='green_peppers'>Green Peppers</label>
                <input
                    type='checkbox'
                    name='onions'
                    value='onions'
                    checked={form.onions===true}
                    onChange={handleCheck}
                />
                <label htmlFor='onions'>Onions</label>
            <h3>How Many Do You Want?</h3>
                <input
                    type='number'
                    name='quantity'
                    min={1}
                    value={form.quantity}
                    onChange={handleForm}
                />
            <h3>Do You Have Any Special Instructions?</h3>
                <input
                    type='text'
                    name='instructions'
                    placeholder='Special Instructions'
                    onChange={handleForm}
                />
                <button>Submit Order</button>
            </form>
        </div>
    );
};

export default Pizza;