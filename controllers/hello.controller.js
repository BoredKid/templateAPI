exports.helloWorld = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Hello World!',
  });
};

exports.helloName = (req, res) => {
  const name = req.params.name || req.body.name;
  if (!name) {
    res.status(400).json({
      success: false,
      message: 'Name missing',
    });
  }

  res.status(200).json({
    success: true,
    message: `Hello ${name}!`,
  });
};
