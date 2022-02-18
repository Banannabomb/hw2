const parseArray = (givenArray) => {
  const mapper = givenArray.map((x) => x[1]);
  return mapper;
};

export { parseArray };
