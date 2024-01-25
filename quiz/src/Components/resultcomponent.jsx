import '../App.css'
 
 export default function Result() {
     return(
         <section className="resultPage">
              <h2 className="heading">Result</h2>
                        
               <div className='divContainer'> 

                  <div className='resultdata'>
                      <h4>You need more practice!</h4>
                      <h3>Your Score is 20 %</h3>
                  </div>

                      <div className='flex'> 
                         <div className='resultdetails'>
                                <p>Total number of quesions</p>
                               <p>Number of attempted questions</p>
                               <p>Number of correct answers</p>
                               <p>Number of wrong answers</p>
                         </div>
                         <div className='numberdata'>
                               <p>15</p>
                                <p>9</p>
                                 <p>3</p>
                                 <p>6</p>
                         </div>
                      </div>   
                      </div> 
                        

          <div className='controlbutton'>
             <button className="playAgainbutton">Play Again</button>
             <button className="homebutton">Back to Home</button>
        </div>
              </section>
     )
}
    