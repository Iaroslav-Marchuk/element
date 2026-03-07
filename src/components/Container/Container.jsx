function Container({ children, className = '' }) {
  return (
    <div
      className={`mx-auto px-5 max-w-xs md:max-w-3xl md:px-8 xl:max-w-7xl xl:px-4 ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;
