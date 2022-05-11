const NewProduct = (props) => {
    return(
        <div>
            Name: <input type='text' onChange={props.onFieldsChanged} name='name' />

            Price: <input type='text' onChange={props.onFieldsChanged} name='price' />

            <input type='button' value='Submit' onClick={props.handleSaveProduct} />

        </div>

    )
}

export default NewProduct;