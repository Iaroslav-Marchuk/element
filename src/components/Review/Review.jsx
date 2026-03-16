function Review({ review, avatar, name, adress }) {
  return (
    <div
      className="p-3.5 bg-(--white) rounded-[28px] rounded-tl-none 
    md:w-125 "
    >
      <div className="mb-7">
        <ul className="flex gap-1">
          {Array(5)
            .fill(null)
            .map((_, i) => (
              <li key={i}>
                <img src="/pics/star.png" alt="star" className="w-5 h-5" />
              </li>
            ))}
        </ul>
      </div>

      <p className="font-bold mb-10 text-(--black) md:text-lg">{review}</p>

      <div className="flex gap-4 w-50">
        <img src={avatar} alt={name} className="w-10 h-12 py-0.5" />
        <div
          className="relative flex flex-col gap-0.5 justify-center pr-4
          after:content-[''] 
          after:absolute 
          after:right-0 
          after:top-0 
          after:w-px
          after:h-full 
          after:bg-(--black)
          after:translate-x
        "
        >
          <span className="font-medium text-sm text-(--black)">{name}</span>
          <span className="text-sm text-(--black)">{adress}</span>
        </div>
      </div>
    </div>
  );
}

export default Review;
