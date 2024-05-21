const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const LikeButton =()=>{
    const [liked, setLiked] = React.useState(false);

    return(
        <>
            <article onClick={()=> setLiked(!liked)}>
                {
                    liked == false ? <img src="./like.svg" alt="like"/> : <img src="./red-like.svg" alt="like"/>
                    
                }
            </article>
        </>
    )
}

const ThumbNail = function({godwin}){
    return(
        <section style={{backgroundColor: godwin}}>
            <img src="./play-filled.svg" alt="play"/>
        </section>
    )
}

function Video({thum,des}){
    return(
        <div className="video-holder" >
            <div className="Thumb-holder">
            <ThumbNail godwin={thum}/>
            <div>
            <h3>My Video</h3>
            <p>{des}</p>
            </div>
            </div>
            <LikeButton/>
        </div>
    )
}

function MyApp() {
    return (
        <main>
            <div className="videos-holder" >
            <Video thum="blue" des="First Video" />
            <Video thum="orange" des="Second Video"/>
            <Video thum="green" des="Third Video"/>
            </div>
        </main>
    );
  }

  root.render(<MyApp />);