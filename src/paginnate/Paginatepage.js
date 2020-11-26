import React, {useState, useEffect} from 'react'

const intitialState = 1;
const Paginatepage=({showperpage, onChangehnadle , total})=>{
    // console.log(total)
    const [counter, setCounter] = useState(intitialState);
    const [numberofbuttons, setNumberofbuttons] = useState(Math.ceil(total / showperpage));
    

    useEffect(()=>{
        // console.log('roshan')
        const value = showperpage * counter;
        onChangehnadle(value-showperpage, value)

    }, [counter]);

    const onClickbutton=(type)=>{
        if(type==='prev'){
            if(counter === 1){
                setCounter(1)
            }else{
                setCounter(counter-1)
            }
        }else if(type==='next'){
            if(Math.ceil(total / showperpage) === counter){
                setCounter(counter);
            }else{
                setCounter(counter+1)
            }
        }
    };
    
    return(
        <div className=' d-flex justify-content-center'>
             <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item"><a class="page-link" href="!#" onClick={()=>onClickbutton('prev')}>Previous</a></li>
             {new Array(numberofbuttons).fill("").map((element, index)=>(
                <li class={`page-item ${index+1===counter ? 'active' : null}`}><a class='page-link' href='!#' onClick={()=>setCounter(index+1)}>{index+1}</a></li> 
             ))}
              <li class="page-item"><a class="page-link" href="!#" onClick={()=>onClickbutton('next')}>Next</a></li>
            </ul>
             </nav>
        </div>
    )
}

export default Paginatepage;