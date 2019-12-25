function Gorilla(props){
    console.log(props);
    const gorilla = ['うほ', 'ウホ', 'ｳﾎ', 'ゥホ', 'uho']

    const uho = Array.from(Array(props.tweet.length))
        .map(()=>gorilla[Math.floor(Math.random()*gorilla.length)])
        .join('')

    return <div>{uho}</div>
}
