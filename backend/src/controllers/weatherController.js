const getWeather = async (req, res) => {
  res.json({
    weather: {
      temperature_2m: 30,
      wind_speed_10m: 10
    },
    updatedAt: new Date()
  });
};

module.exports = {
  getWeather
};