export default {
  init({ commit }) {
    let xhr = [];
    const requestArray = [ "kingdoms", "troops", "classes", "weapons" ];
    for (let i = 0; i < requestArray.length; i++) {
      xhr[i] = new XMLHttpRequest();
      xhr[i].open("GET", "http://gowdb.com/api/" + requestArray[i], true);
      xhr[i].onreadystatechange = function() {
        if (xhr[i].readyState === 4 && xhr[i].status === 200) commit(requestArray[i], JSON.parse(xhr[i].response)[requestArray[i]]);
      };
      // xhr[i].send(); deactivated in dev-mode
    }
    // get current events from API or window.whatevs
  },

  print(context) {
    console.log(context);
  }
};
