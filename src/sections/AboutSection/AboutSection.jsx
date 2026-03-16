import Container from '../../components/Container/Container.jsx';

function AboutSection() {
  return (
    <section>
      <Container className="py-16">
        <div
          className="flex flex-col gap-10
        md:flex-row"
        >
          <div
            className="w-full
          md:w-[50%]"
          >
            <img src="/pics/about.jpg" alt="metal" />
          </div>
          <div
            className="flex flex-col justify-center items-center w-full
          md:w-[50%]"
          >
            <h2
              className="font-bold mb-10 text-[32px]
            md:text-[42px]"
            >
              Про нас
            </h2>
            <p className="leading-normal">
              Уже понад 10 років ми займаємося виготовленням виробів з бляхи для
              дому та господарства. За цей час ми поєднали досвід, якісні
              матеріали та точні виміри, щоб створювати надійні та довговічні
              рішення. Ми уважно ставимося до кожної деталі — від першого виміру
              до готового виробу, щоб наші клієнти отримували продукцію, якій
              можна довіряти.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutSection;
