let id = 0
const createdId = ():number => {
  id += 1;
  return id;
}

export {createdId};

//函数封装法