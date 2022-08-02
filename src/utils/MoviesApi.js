export class MoviesApi {
    constructor({ baseUrl }) {
        this._baseUrl = baseUrl;
    }

    getMovies() {
        return fetch(`${this._baseUrl}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        }).then(this._checkResponse);
    }


    _checkResponse(res) {
        return res.ok ? res.json() : Promise.reject(res.status);
    }
}

export const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
});