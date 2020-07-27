import React, { Component } from 'react';
import api from '../../services/api'

import './styles.css'

export default class Car extends Component {

    state = {
        car: {}
    }

    async componentDidMount() {
        const { id } = this.props.match.params
        const response = await api.get(`/cars/${id}`)

        this.setState({ car: response.data })
    }

    render() {
        const { car } = this.state

        return (
            <div className="car-info">
                <h1>{car.model}</h1>
                <p>Color: {car.color} | Price: {car.price}</p>
            </div>
        )
    }
}