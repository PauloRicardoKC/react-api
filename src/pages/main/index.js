import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom'

import './styles.css'

export default class Main extends Component {

    state = {
        cars: [],
        carInfo: {},
        page: 1
    }

    componentDidMount() {
        this.loadCars()
    }

    loadCars = async (page = 1) => {
        const response = await api.get(`/cars?page=${page}`)

        const { docs, ...carInfo } = response.data

        this.setState({ cars: docs, carInfo, page })
    }

    prevPage = () => {
        const { page, carInfo } = this.state

        if (page === 1) return

        const pageNumber = page - 1

        this.loadCars(pageNumber)
    }

    nextPage = () => {
        const { page, carInfo } = this.state

        if (page === carInfo.pages) return

        const pageNumber = page + 1

        this.loadCars(pageNumber)
    }

    render() {
        const { cars, page, carInfo } = this.state

        return (
            <div className="car-list">
                {cars.map(car => (
                    <article key={car._id}>
                        <strong>{car.model}</strong>
                        <p>Color: {car.color} | Price: {car.price}</p>

                        <Link to={`/cars/${car._id}`}>Acessar</Link>                        
                    </article>
                ))}

                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === carInfo.pages} onClick={this.nextPage}>Próxima</button>
                </div>
            </div>
        )
    }
}