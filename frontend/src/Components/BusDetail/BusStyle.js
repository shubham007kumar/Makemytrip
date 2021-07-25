import styled from 'styled-components'

export const Container = styled.div`
display: flex;
justify-content: flex-start;
padding: 1rem 7rem;
column-gap: 2rem;
`

export const Container1 = styled.div`
.board{
  padding-left: 1rem;
  li{
      list-style-type: none;
  } 
  input[type=text]{
      padding:0.3rem;
  }
  input[type=checkbox]{
    width:15px;
    height: 15px;
  }
  input{
      margin-bottom: 1rem;
  }
}
`

export const Container2 = styled.div`
`

export const Div = styled.div`
display: flex;
justify-content:center;
column-gap: 15rem;
border: 1px solid black;
margin-bottom: 1rem;
:hover{
    border: 1px solid #29b6f6;
    background-color: #eceff1;
}
`

export const Div1 = styled.div`
display: flex;
flex-direction: column;
`
export const Div2 = styled.div`
display: flex;
align-items: center;
column-gap: 1rem;
padding-left: 1rem;
.operatorname{
    font-size: 1.5rem;
    font-weight: bold;
}
`
export const Div3 = styled.div`
display: flex;
column-gap: 1.8rem;
padding-left: 1rem;
`

export const Div4 = styled.div`
display: flex;
column-gap: 2rem;
padding-left: 1rem;
`

export const Div5= styled.div`
display: flex;
column-gap: 2rem;
padding-left: 1rem;
`
export const Div6= styled.div`
display: flex;
column-gap: 2rem;
padding-left: 1rem;
`

export const Div7= styled.div`
display: flex;
padding: 0rem 2rem;
flex-direction: column;
justify-content: space-between;
background-color: powderblue;
.btn{
    margin-bottom: 1rem;
    padding: 0.5rem 0.5rem;
    border-radius: 10px;
    background-color: #7986cb;
}
`
export const Outer =styled.div`
display: flex;
column-gap: 2rem;
align-items: center;
padding:0rem 0rem 0rem 12rem;
.icon{
    font-size:1.8rem;
    color: #757575;
    margin-bottom: -1rem;
    padding-top: 1rem;
}
.flight{
  display: flex;
  flex-direction: column;
}
`

export const Inner = styled.div`
display: flex;
column-gap: 0.5rem;
padding-left: 27rem;
align-items: center;
padding-top: 1rem;
color: #757575; 
`
export const Block = styled.div`

`