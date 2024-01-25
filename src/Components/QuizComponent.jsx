import '../App.css'

export default  function Quiz() {
    return (<section className='playground'>
        
        <div className='quizcontainer'>
            <h2>Question</h2>
            <p>1 of 15</p>
            <h4>Which is the only mammal that can jump?</h4>

            <div className='options'>
                <div className="choices">Dog</div>
                <div className="choices">Elephant</div>
                <div className="choices">Goat</div>
                <div className="choices">Lion</div>    
            </div>

              <div className="button-container">
                 <button className="button previousbutton">Previous</button>
                 <button className=" button  nextbutton">Next</button>
                  <button className="button quitbutton">Quit</button>
             </div>
      </div>
     </section>

    )
}
