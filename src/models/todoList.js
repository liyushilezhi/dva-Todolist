// let newData = Object.assign({}, data);  
export default {
  namespace: 'todoList',
  state: {
    list: [
      {
        name: '完成react+dva Todolist',
        status: false,
      },
      {
        name: '完成dva用户管理系统',
        status: false,
      },
      {
        name: '吃一顿好的犒劳自己',
        status: true,
      },
    ],
  },
  reducers: {
    add(state, { item }) {
      if(item.name===''){
          return {
            ...state,
          list: [...state.list],
        }
      }
      return {
        ...state,
        list: concat(state.list, [item]),
      };
    },
    check(state,{ index, value }){
      const newState = [...state.list]
      newState[index].status = value;
      return{
         ...state,
         list: newState,
      }
    },
    delete(state,{ index }){
      return{
         ...state,
         list: del(state.list,index),
      }
    }
  },

};
function concat(arr1,arr2){
  let arr=[]
  return arr.concat(arr1,arr2)
}
function del(arr,index){
  let newArr = [...arr]
  newArr.splice(index,1)
  return newArr
}