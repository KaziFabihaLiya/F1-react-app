export default function Singer(singer){
    console.log(singer)
    console.log(singer.singer.name)
    console.log(singer.age)
    return (
    <div>
        <h3>Name: {singer.singer.name}</h3>
        <p> Age: {singer.singer.age}</p>
    </div>
    )
}