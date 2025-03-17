function ArrayMap(){

    const myArray = ['apple', 'banana', 'orange'];
    const myList = myArray.map((item) => <ul>
        <li>{item}</li>
    </ul>);
    return (
        <>
            {myList}
        </>
    );
}

export default ArrayMap;