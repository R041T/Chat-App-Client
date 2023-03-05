import './LandingHero.css'

export function LandingHero(){
    const arr = [1,2,3,4,5]
    const listItems =  arr.map((n,index) => <div className='circle' key={index}></div>);

    return(
        <div id="landing-hero">
        <div className='circles'>{listItems}</div>
        <div className='circles'>{listItems}</div>        
        <div className='circles'>{listItems}</div>        
        <div className='circles'>{listItems}</div> 
        <div className='circles'>{listItems}</div>
        <div className='circles'>{listItems}</div>        
        <div className='circles'>{listItems}</div>        
        <div className='circles'>{listItems}</div>        
        </div>
    )
}