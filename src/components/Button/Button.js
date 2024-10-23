const Button = ({ content }) => {
    return (
        <button
            className='bg-black text-white text-base rounded-full px-10 py-2 w-full'
            type='submit'
        >
            {content}
        </button>
    )
}

export default Button
