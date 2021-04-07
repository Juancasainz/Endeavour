import Pap from "./components/Pap";
import Container from '@material-ui/core/Container';

const Home = () => {
  return (
    <div>
      <Container>
        <Pap />
      </Container>
    </div>

    // <div className="home">
    //     {error && <div> {error} </div>}
    //     {isPending && <div> Loading </div>}
    //     {blogs && <BlogList blogs={blogs} title='Todos los blogs' borrarBlog={borrarBlog}/>}
    // </div>
  );
};

export default Home;
