const { Services } = require('../models');

const servicesData = [
    {
       "name": "Women's Styling",
       "price": "$50 - $100 (depending on hair length)",
       "duration": "45 min" 
    },
    {
        "name": "Men's Styling",
        "price": "$20 - $50",
        "duration": "45 min"  
     },
     {
        "name": "Women's Haircut",
        "price": "$35",
        "duration": "1hr" 
     },
     {
        "name": "Men's Haircut",
        "price": "$25",
        "duration": "45 min." 
     },
     {
        "name": "Beard Service",
        "price": "$25 - $45",
        "duration": "45 min" 
     },
     {
        "name": "Highlights & Tints",
        "price": "$75 - $200",
        "duration": "2 - 3 hrs depedning on hair length" 
     }
]
const seedServices = async () => {
    const services = await Services.bulkCreate(servicesData, {
    individualHooks: true,
    return: true,
  });
  } 
  
  module.exports = seedServices;  