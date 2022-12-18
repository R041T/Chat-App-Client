import './LandingHero.css'

export function LandingHero(){
    const arr = [1,2,3,4,5]
    const listItems =  arr.map((n) => <div className='circle' key={n.toString}></div>);

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