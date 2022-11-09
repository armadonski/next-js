export default `
body{
display: block;
}
#globalLoader{
    position: fixed;
    z-index: 1700;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color:#393E46;
    display: flex;
    left: 0,
    right: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
}
.loader {
    --ballcolor: #f2f2f2;
    --shadow: 0px 0 #ffffff00;
    --shadowcolor: #ffffff00;
    width: 10px;
    height: 10px;
    left: -120px;
    border-radius: 50%;
    position: relative;
    color: var(--ballcolor);
    animation: shadowRolling 2s linear infinite;
  }
  
  @keyframes shadowRolling {
    
    0% {
      box-shadow: var(--shadow),
          var(--shadow),
          var(--shadow),
          var(--shadow);
    }
  
    12% {
      box-shadow: 100px 0 var(--ballcolor),
          var(--shadow),
          var(--shadow), 
          var(--shadow);
    }
  
    25% {
      box-shadow: 110px 0 var(--ballcolor),
          100px 0 var(--ballcolor),
          var(--shadow), 
          var(--shadow);
    }
  
    36% {
      box-shadow: 120px 0 var(--ballcolor), 
          110px 0 var(--ballcolor), 
          100px 0 var(--ballcolor), 
           var(--shadow);
    }
  
    50% {
      box-shadow: 130px 0 var(--ballcolor),
          120px 0 var(--ballcolor),
          110px 0 var(--ballcolor),
          100px 0 var(--ballcolor);
    }
  
    62% {
      box-shadow: 200px 0 var(--shadowcolor),
           130px 0 var(--ballcolor), 
           120px 0 var(--ballcolor), 
           110px 0 var(--ballcolor);
    }
  
    75% {
      box-shadow: 200px 0 var(--shadowcolor),
          200px 0 var(--shadowcolor),
          130px 0 var(--ballcolor), 
          120px 0 var(--ballcolor);
    }
  
    87% {
      box-shadow: 200px 0 var(--shadowcolor), 
          200px 0 var(--shadowcolor), 
          200px 0 var(--shadowcolor), 
          130px 0 var(--ballcolor);
    }
  
    100% {
      box-shadow: 200px 0 var(--shadowcolor), 
          200px 0 var(--shadowcolor),
          200px 0 var(--shadowcolor),
          200px 0 var(--shadowcolor);
    }
  }`;
