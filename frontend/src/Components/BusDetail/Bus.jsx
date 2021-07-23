import React, { useEffect } from 'react'
import {useDispatch, useSelector} from  'react-redux'
import { getbusdata } from '../../Redux/Bus/action'
import { Container, Container1, Container2, Div, Div1, Div2,Div3, Div4, Div5,Div6,Div7 } from './BusStyle'
export const Bus =() => {
     const dispatch = useDispatch()
     const data = useSelector(state => state.Bus.data)
     useEffect(()=>{
         dispatch(getbusdata())
     },[dispatch])

     useEffect(()=>{
           if(data.length>0)
           {

            console.log(data)
           }
     },[data])
     console.log(data)
    return(
        <>
          <Container>
                 <Container1>
                        <div style={{height:"32vh",overflow:"hidden"}} className="board">
                            <h3>Boarding Points</h3>
                            <input type="text" placeholder="search boarding point" />
                            <div>
                                {
                                data?.map((item) =>{
                                    const { boardpoint } = item.fromId
                                    const { board } = boardpoint
                                    return(
                                        board.map((city)=>{
                                            return(
                                             <div style={{display:"flex"}}>
                                                 <input type="checkbox"/>
                                                <li>{Object.keys(city)}</li> 
                                             </div>
                                            )
                                        })
                                    )
                                })
                                }
                            </div>
                         </div>
                         <div style={{height:"32vh",overflow:"hidden"}} className="board">
                         <h3>Drop Points</h3>
                            <input type="text" placeholder="search Drop point" />
                            <div>
                                {
                                data?.map((item) =>{
                                    const { droppoint } = item.toId
                                    const { drop } = droppoint
                                    return(
                                        drop.map((city)=>{
                                            return(
                                                <div style={{display:"flex"}}>
                                                <input type="checkbox"/>
                                               <li>{Object.keys(city)}</li> 
                                              </div>
                                            )
                                        })
                                    )
                                })
                                }
                            </div> 
                         </div>
                         <div style={{height:"32vh",overflow:"hidden"}} className="board">
                         <h3>Travel Operator</h3>
                            <input type="text" placeholder="search Drop point" />
                            <div>
                                {
                                data?.map((item) =>{
                                    
                                    return(
                                        <div style={{display:"flex"}}>
                                        <input type="checkbox"/>
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
                          return(
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
                                      <h/>
                                      <Div5>
                                          <p>Live Tracking</p>
                                      </Div5>
                                      <hr/>
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
                                      <button>Select seats</button>
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