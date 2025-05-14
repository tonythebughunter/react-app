import profile from './assets/profile.jpg'

function Card(){
    return(
        <div className="card">
            <img src={profile} alt="" className="card-img" width='100'/>
            <h2 className="card-title">Anthony Mwangi</h2>
            <p className="card-text">Cybersecurity analyst and Software Engineer</p>
        </div>
    );
}
export default Card