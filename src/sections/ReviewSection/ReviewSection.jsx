import Container from '../../components/Container/Container.jsx';
import Review from '../../components/Review/Review.jsx';

function ReviewSection() {
  return (
    <section
      className="relative w-full h-full bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url('/pics/review.jpg')" }}
    >
      <Container className="py-16">
        <h2
          className="font-bold text-[32px] mb-5 text-(--white)
        md:text-[42px]"
        >
          Що про нас говорять
        </h2>
        <p className="mb-8 text-(--white) leading-[1.43]">
          Нашу роботу найкраще оцінюють наші клієнти.
        </p>
        <div
          className="flex flex-col gap-6 md:flex-row
        md:gap-8
        xl:gap-35"
        >
          <Review
            review={
              '“Замовляли ринви для будинку. Роботу виконали швидко та акуратно, усе підігнано точно за розмірами. Якість роботи відчувається одразу. Дуже задоволені результатом.”'
            }
            avatar={'/public/pics/avatar.jpg'}
            name={'п. Іван'}
            adress={'Закарпатська обл.'}
          />
          <Review
            review={
              '"Замовляв металевий паркан. Усе зробили професійно: точні виміри, гарна якість і швидке виготовлення. Видно, що люди мають досвід у своїй справі."'
            }
            avatar={'/public/pics/avatar.jpg'}
            name={'п. Василь'}
            adress={'Закарпатська обл.'}
          />
        </div>
      </Container>
    </section>
  );
}

export default ReviewSection;
