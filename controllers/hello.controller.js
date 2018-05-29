exports.helloWorld = (req, res) => res.status(200).json({
  status: 200,
  result: 'Hello World!',
});

exports.helloName = (req, res) => {
  const name = req.params.name || req.body.name;
  if (!name) {
    return res.status(400).json({
      status: 400,
      message: 'Name missing',
    });
  }

  return res.status(200).json({
    status: 200,
    result: `Hello ${name}!`,
  });
};
