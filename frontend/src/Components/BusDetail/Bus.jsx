import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { getbusdata } from '../../Redux/Bus/action'
import { Container, Container1, Container2, Div, Div1, Div2, Div3, Div4, Div5, Div6, Div7, Inner, Outer, Block } from './BusStyle'
import FlightIcon from '@material-ui/icons/Flight';
import HotelIcon from '@material-ui/icons/Hotel';
import HomeIcon from '@material-ui/icons/Home';
import TrainIcon from '@material-ui/icons/Train';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import PersonIcon from '@material-ui/icons/Person';

export const Bus = ({ props }) => {

    const history = useHistory();

    const dispatch = useDispatch()
    const { state } = useLocation()
    const data = useSelector(state => state.Bus.data)
    console.log(data)
    useEffect(() => {
        dispatch(getbusdata())
    }, [dispatch])

    useEffect(() => {
        if (data.length > 0) {

            console.log(data)
        }
    }, [data])


    const handleRedirect = () => {

        history.push("/booking-seats")

    }

    return (
        <>
            <Outer>
                <img style={{ width: "6vw", marginRight: "4rem", marginTop: "1.5rem" }} src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/logo@2x.png" alt="blank" />
                <FlightIcon className="icon" />
                <HotelIcon className="icon" />
                <HomeIcon className="icon" />
                <TrainIcon className="icon" />
                <DirectionsCarIcon className="icon" />
                <DirectionsBikeIcon className="icon" />
                <Inner>
                    <PersonIcon />
                    <p>Login</p>
                </Inner>
            </Outer>
            <Block>
            </Block>
            <Container>
                <Container1>
                    <div style={{ height: "32vh", overflow: "hidden" }} className="board">
                        <h3>Boarding Points</h3>
                        <input type="text" placeholder="search boarding point" />
                        <div>
                            {
                                data?.map((item) => {
                                    const { boardpoint } = item.fromId
                                    const { board } = boardpoint
                                    return (
                                        board.map((city) => {
                                            return (
                                                <div style={{ display: "flex" }}>
                                                    <input type="checkbox" />
                                                    <li>{Object.keys(city)}</li>
                                                </div>
                                            )
                                        })
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div style={{ height: "32vh", overflow: "hidden" }} className="board">
                        <h3>Drop Points</h3>
                        <input type="text" placeholder="search Drop point" />
                        <div>
                            {
                                data?.map((item) => {
                                    const { droppoint } = item.toId
                                    const { drop } = droppoint
                                    return (
                                        drop.map((city) => {
                                            return (
                                                <div style={{ display: "flex" }}>
                                                    <input type="checkbox" />
                                                    <li>{Object.keys(city)}</li>
                                                </div>
                                            )
                                        })
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div style={{ height: "32vh", overflow: "hidden" }} className="board">
                        <h3>Travel Operator</h3>
                        <input type="text" placeholder="search Drop point" />
                        <div>
                            {
                                data?.map((item) => {

                                    return (
                                        <div style={{ display: "flex" }}>
                                            <input type="checkbox" />
                                            <li>{Object.values(item.operatorId)}</li>
                                        </div>

                                    )
                                })
                            }
                        </div>
                    </div>
                </Container1>
                <Container2>
                    {
                        data.map((busDetail) => {
                            return (
                                <Div key={busDetail._id}>
                                    <Div1>
                                        <Div2>
                                            <p className="operatorname">{Object.values(busDetail.operatorId)}</p>
                                            <p>{`${busDetail.rating} rating`}</p>
                                        </Div2>
                                        <Div3>
                                            <p>{busDetail.bus_types}</p>
                                            <p>{`${busDetail.seat_left} seats left`}</p>
                                            <p>{`${busDetail.window_seat} window seat`}</p>
                                        </Div3>
                                        <Div4>
                                            <p>{`${busDetail.time_departure} A.M`}</p>
                                            <p>{busDetail.total_time}</p>
                                            <p>{`${busDetail.time_arrival} P.M`}</p>
                                        </Div4>
                                        <h />
                                        <Div5>
                                            <p>Live Tracking</p>
                                        </Div5>
                                        <hr />
                                        <Div6>
                                            <p>Policies</p>
                                            <p>Photos</p>
                                            <p>Amenities</p>
                                            <p>Pickups & Drops</p>
                                            <p>Reviews</p>
                                        </Div6>
                                    </Div1>
                                    <Div7>
                                        <div>
                                            <p>starting from</p>
                                            <p>{busDetail.price}</p>
                                        </div>
                                        <button className="btn" onClick={handleRedirect}>Select seats</button>
                                    </Div7>

                                </Div>
                            )
                        })
                    }
                </Container2>
            </Container>
        </>
    )
}