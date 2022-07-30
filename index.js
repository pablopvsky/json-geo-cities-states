export const getCitysByStateCode = (cities_list, code) => {
  let cities = cities_list.filter((city) => city.state_code === code);

  return (
    cities.sort((a, b) => {
      if (a.province > b.province) {
        return -1;
      }
      if (a.province < b.province) {
        return 1;
      }
      return 0;
    }) || []
  );
};

export const getCityByCode = (cities_list, code) => {
  if (!code) {
    return null;
  }
  let city = cities_list.find((city) => city.city_code === code);

  return city;
};

export const cityCodeToName = (cities_list, code) => {
  if (!code) {
    return null;
  }
  let city = cities_list.find((city) => city.city_code === code);

  return city.city_name;
};

export const getCityByName = (cities_list, name) => {
  if (!name) {
    return null;
  }

  let city = cities_list.find((city) => city.city_name === name);

  return city;
};

export const getShippingPriceByZone = (cities_list, city_code) => {
  if (!city_code) {
    return 0;
  }

  const cityZone = cities_list.find((city) => city.city_code === city_code);

  const zone = {
    1: 5400,
    2: 10700,
    3: 11800,
    4: 13000,
    5: 20150,
  };

  return zone[cityZone.zone];
};
