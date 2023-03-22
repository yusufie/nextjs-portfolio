
function Home() {

  const homeStyle = {
    color: 'white',
    marginTop: '5rem',
    marginBottom: '5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '30vh',
  };

  return (

    <div style={homeStyle}>
      <h1 style= {{fontSize: "3rem" }}>Hello World!</h1>
      <h2 style= {{fontSize: "3rem" }}>I&apos;m Yusuf</h2>
    </div>

  );
}

export default Home