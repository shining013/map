import { createStore } from "vuex";

export default createStore({
  state: {
    userData: [
      {
        userid: "yunju",
        password: "123",
        username: "츄르",
        addr: "서울",
        image: "https://picsum.photos/100",
      },
      {
        userid: "juhyun",
        password: "456",
        username: "츄르",
        addr: "서울",
        image: "https://picsum.photos/100",
      },
      {
        userid: "hani",
        password: "789",
        username: "츄르",
        addr: "서울",
        image: "https://picsum.photos/100",
      },
    ],
  },
  mutations: {
    addUser(state, payload) {
      state.userData.push(payload);
    },
    deleteUser(state, index) {
      state.userData.splice(index, 1);
    },
  },
});
