import React , { useState} from 'react';

function Pagination(props) {
    
  // const [page,setPage]=useState(1);
  
  // function goAhead(){
  //   setPage(page+1);
  // }
  // function goBehind(){
  //       if(page>1)
  //   setPage(page-1);
  // }


  return <>
    <div className="w-full 
    flex justify-center
    mb-8
   
    ">
        <button className="
            p-2
            border-2
            border-indigo-500
            text-indigo-500
            border-r-0
            rounded-l-xl
        "
        onClick={props.goBehind}
        >Previous</button>
        <button className="
            p-2
            border-2
            border-indigo-500
            text-indigo-500
            bg-gray-300
            ">{props.page}</button>
        <button className="
            p-2
            border-2
            border-indigo-500
            text-indigo-500
            border-l-0
            rounded-r-xl
            "
            
            onClick={props.goAhead}
            >Next</button>
    </div>
  </>
}

export default Pagination;
