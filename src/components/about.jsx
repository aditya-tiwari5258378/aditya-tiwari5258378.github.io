import React,{Component} from 'react'

class About extends Component{
    render(){
        return(
            <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <li><p>ECE as major</p></li>
                    <li><p>Developer</p></li>
                    <li><p>Mathematics Lover</p></li>
                    <li><p>Left arm medium-pacer bowler, Right handed Batsman</p></li>
                    <p><h3>"Do some algorithmic calculations".</h3></p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        
      </div>
        )
    }
}


export default About