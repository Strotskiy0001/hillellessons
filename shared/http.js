class Http {
  #API_url =
    "http://nestapi-env.eba-9kgvuxij.eu-central-1.elasticbeanstalk.com/";
  #endpoint = null;

  constructor(url) {}

  create(url, item) {
    return axios.post(this.#API_url + url, item).then((r) => r.data);
  }

  getAll(url) {
    return axios(this.#API_url + url).then((r) => r.data);
  }

  update(url, id, item) {
    return axios.put(this.#API_url + url + id, item).then((r) => r.data);
  }

  delete(url, id) {
    return axios.delete(this.#API_url + url + id).then((r) => r.data);
  }
}
