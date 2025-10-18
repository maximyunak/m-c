class Api {
  constructor() {
    this.baseUrl = 'https://gsuppriigehp.buymysite.ru/api-of'
  }

  getToken() {
    return localStorage.getItem('token')
  }

  async request(endpoint, options = {}) {
    const token = this.getToken()

    const headers = {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    }

    const res = await fetch(`${this.baseUrl}${endpoint}`, {
      ...options,
      headers,
      // mode: 'no-cors',
    }).catch((err) => {
      throw new Error(err || 'Ошибка api')
    })
    return res
  }

  get(endpoint) {
    return this.request(endpoint, {
      method: 'GET',
    })
  }

  post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  delete(endpoint) {
    return this.request(endpoint, {
      method: 'DELETE',
    })
  }
}

export default new Api()
