const elementsWillAnimated = document.querySelectorAll(
  '.animate-to-right, .animate-to-left, .animate-to-bottom, .animate-to-bottom-right, .animate-opacity'
);

const animate = (element) => {
  if (!element) {
    return;
  }

  const intersectionCallback = (element) => (entries) => {
    entries.forEach((entry) => {
      const method = entry.isIntersecting ? 'add' : 'remove';
      element.classList[method]('visible');
    });
  };

  const intersectionObserver = new IntersectionObserver(
    intersectionCallback(element)
  );
  intersectionObserver.observe(element);
};

elementsWillAnimated.forEach((element) => {
  animate(element);
});
