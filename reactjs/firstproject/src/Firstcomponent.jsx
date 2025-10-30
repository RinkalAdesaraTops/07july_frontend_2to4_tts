//function component
const Firstcomponent = ()=>{
    let myStyle = {
        color:'brown',
        fontSize:'40px',
        backgroundColor:'pink',
        textAlign:'center'
    }
    return (
        <>
        <div>
            {/* camelCase */}
            <h3 style={{color:'red',backgroundColor:'yellowgreen'}}>First component created by me</h3>
            <h4 style={myStyle}>Hello Css Example</h4>
        </div>
        </>
    )
}
export default Firstcomponent;