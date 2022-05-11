export const Book = ({ img, title, author }) => {
    // const {img,title,author} = props.book
    return (<article className='book'>
        <img src={img} alt='' />
        <h1>{title}</h1>
        <h4>{author}</h4>
    </article>
    );
}