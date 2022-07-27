
export class MainApi {
    constructor({ baseUrl }) {
        this._baseUrl = baseUrl;
    }

    getProfile() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('jwt')}`,
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }).then(this._checkResponse)
    }

    getMovies() {
        return fetch(`${this._baseUrl}/movies`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        }).then(this._checkResponse);
    }

    register({ name, email, password }) {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ name, email, password })
        }).then(this._checkResponse)
    }

    login({ email, password }) {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ email, password })
        }).then(this._checkResponse)
    }

    editProfile({ name, email }) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                name,
                email,
            }),
        }).then(this._checkResponse);
    }
    addMovie(movie) {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                country: movie.country || 'неизвестно',
                director: movie.director,
                duration: movie.duration.toString(),
                year: movie.year,
                description: movie.description,
                image: `https://api.nomoreparties.co${movie.image.url}`,
                trailerLink: movie.trailerLink,
                thumbnail: `https://api.nomoreparties.co${movie.image.url}`,
                movieId: movie.id.toString(),
                nameRU: movie.nameRU,
                nameEN: movie.nameEN || 'неизвестно',
            }),
        }).then(this._checkResponse);
    }
    deleteMovie(id) {
        return fetch(`${this._baseUrl}/movies/${id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        }).then(this._checkResponse);
    }

    _checkResponse(res) {
        return res.ok ? res.json() : Promise.reject(res.status);
    }
}

export const api = new MainApi({
    baseUrl: 'https://api.movies.nikiforovnd.nomoreparties.sbs',
});