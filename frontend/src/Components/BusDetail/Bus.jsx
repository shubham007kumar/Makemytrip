import React, { useEffect } from 'react'
import {useDispatch, useSelector} from  'react-redux'
import { getbusdata } from '../../Redux/Bus/action'
export const Bus =() => {
     const dispatch = useDispatch()
     const data = useSelector(state => state.Bus.data)
     useEffect(()=>{
         dispatch(getbusdata())
     },[dispatch])
     console.log(data)
    return(
        <>
        
        </>
    )
}