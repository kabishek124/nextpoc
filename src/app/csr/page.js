"use client"
import { useState } from "react";
import { useEffect } from "react";

const Ssg = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async() => {
        try {
            let response;
            response = await fetch('https://jsonplaceholder.typicode.com/todos');
            console.log(response,"response");
            setData(await response?.json());
        } catch (error) {
            throw new Error(error.message);
        }
    }

    return(
        <>
            <div>
                {data?.map((item) => {
                    return(
                        <div key={item?.id}>
                            <h1>{item?.title}</h1>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default Ssg;