const baseURL  = "http://localhost:3000/api/shindigs/";

export default {
    getShindigs() {
      return fetch(baseURL)
      .then(res => res.json())
    },

    postShindig(payload) {
      return fetch(baseURL, {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {'Content-Type' : 'application/json'}
        })
        .then(res => res.json())
    },
    updateShindig(payload) {
        return fetch(baseURL + payload._id, {
          method: 'PUT',
          body: JSON.stringify(payload),
          headers: {'Content-Type': 'application/json'}
        })
    }
};
