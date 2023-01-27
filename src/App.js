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
        
          <h5 className='click' ><a href="#second-page">Click for more details</a></h5>
        
      </div>
      <div className='second-page' id='second-page'>
        <div className='con2'>
          <p className='p2'>One day I asked myself: "why don't you learn and explore on your own?"</p>
          <p className='p2'>So I started building projects.</p>
          <p className='p2'>Sometimes I make projects for fun, sometimes I'm serious about making profits.</p>
          <p className='p2' style={{marginBottom: '15vh'}}>Here's a list of what I did…</p>
          <a href="https://github.com/kakimli/LeaseUW#readme" target="_blank">
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
          <a href="https://skypool.org" target="_blank">
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
        </div>
        
      </div>
      <div style={{height:"20vh"}}></div>
    </div>
  );
}

export default App;
