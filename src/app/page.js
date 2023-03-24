
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
      <h1 style= {{fontSize: "4rem" }}>Hello World!</h1>
      <h1 style= {{fontSize: "4rem" }}>I&apos;m Yusuf</h1>
    </div>

  );
}

export default Home