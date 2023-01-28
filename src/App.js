import './App.css';

function App() {
  return (
    <div className="App">
      <div className='first-page'>
        <h1 className='title'>
          I'm eager to <b>MAKE A DIFFERENCE</b> in Blockchain & DeFi
        </h1>
        <h2 className='subtitle'>
          Do you want me to join your team?
        </h2>
        
          <h5 className='click' ><a style={{cursor: 'pointer'}} href="#second-page">Click for more details</a></h5>
        
      </div>
      <div className='second-page' id='second-page'>
        <div className='con2'>
          <p className='p2'>One day I asked myself: "why don't you learn and explore on your own?"</p>
          <p className='p2'>So I started building projects.</p>
          <p className='p2'>Sometimes I make projects for fun, sometimes I'm serious about making profits.</p>
          <p className='p2' style={{marginBottom: '15vh'}}>Here's a list of what I did…</p>
          <a href="https://github.com/kakimli/LeaseUW#readme" target="_blank" rel="noreferrer">
          <div className='project' style={{  borderTop: 'solid'}}>
            <div className='name'>Lease UW</div>
            <div className='intro'>
              <p className='p3'>
                A blockchain solution to solve lease problems in UW region (more introduction in README.md).
              </p>
              <p className='p3'>
                Using: Solidity, ERC721(NFT), Javascript
              </p>
            </div>
          </div>
          </a>
          <a href="https://skypool.org" target="_blank" rel="noreferrer">
          <div className='project'>
            <div className='name'>SKYPOOL.ORG</div>
            <div className='intro'>
              <p className='p3'>
                A rich-content crypto infomation website for our mining pool users. (You can change language on the top).
              </p>
              <p className='p3'>
                Using: React, Node.js, MongoDB
              </p>
            </div>
          </div>
          </a>
          <p className='about-sky'>
            <a style={{cursor: 'pointer'}} href="#third-page">
              Click for more about Skypool.org...
            </a>
          </p>
        </div>
        <div style={{height:"10vh"}}></div>
      </div>
      <div className='third-page' style={{borderTop: "solid 1px black"}} id='third-page'>
        <div className='con2'>
          <p>Skypool.org is the website made by me for our team in 2021</p>
          <br></br>
          <br></br>
          <h5 style={{fontSize:"1.5rem"}}>Features:</h5>
          <br></br>
          <h5>1. Real time data panel (blocks, hashrates, height...)</h5>
          <p>We collect data from blockchain daemon (like ETC geth) and do real-time computation for users.</p>
          <h5>2. Language system</h5>
          <p>Users can view the website in English or Chinese.</p>
          <h5>3. Personal account</h5>
          <p>Users can add/remove wallets in the account page.</p>
          <h5>4. Insite search engine</h5>
          <p>Users can search by address to view rewards and personal data</p>
        </div>
      </div>
      
    </div>
  );
}

export default App;
