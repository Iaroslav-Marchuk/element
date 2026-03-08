import Container from '../../components/Container/Container.jsx';

function MainPage() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url('/public/pics/background.jpg')" }}
    >
      <div className="absolute inset-0 z-10 bg-linear-to-b from-white to-transparent"></div>
      <Container className="relative z-20 pt-32 text-black">MAINPAGE</Container>
    </section>
  );
}

export default MainPage;
