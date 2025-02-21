const createFakeContact = () => {  
  const names = ['John', 'Jane', 'Alice', 'Bob'];  
  return {  
    name: names[Math.floor(Math.random() * names.length)],  
    phone: `${Math.floor(Math.random() * 1000000000)}`,  
  };  
};  

export default createFakeContact;