let id = parseInt(window.localStorage.getItem('idMax') || '0')
const createdId = ():number => {
  id += 1;
  window.localStorage.setItem('idMax', JSON.stringify(id))
  return id;
}

export {createdId};

//函数封装法