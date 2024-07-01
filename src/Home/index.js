import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myImg from "../assets/logo.png";
import myImg1 from "../assets/usa.png";
import myImg2 from "../assets/footer.png";
import myImg3 from "../assets/body.png";

const Home = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [searchValue,setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    getEmployee();
  }, []);

  useEffect(()=>{
    const filtered = data?.filter(item =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filtered);

  },[data,searchValue]);

  const getEmployee = async () => {
    try {
      let url = "https://api.escuelajs.co/api/v1/users";
      let options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(url, options);
      if (!response.ok) {
        setError("Network response was not ok");
      }
      const temp = await response.json();

      if (response?.status && response.status < 205) {
        setData(temp);
      } else {
        console.log(temp.toString());
      }
    } catch (error) {
      setError(error.message);
    }
  };

  


  return (
    <div className="container_home">
      <header className="header">
        <div className="img_div">
          <img src={myImg} className="img" />
        </div>
        <img src={myImg1} className="usa_image" />

        <div className="ul_nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </header>
      <body className="body">
       <div className="search_data">
        <input type="search" placeholder="search title" onChange={(e)=>setSearchValue(e.target.value)}
        value={searchValue}/>
       </div>
         

       

          <div className="height_scroll" >
            {filteredData
            && filteredData?.map((item,ind)=>(

          <div>
            <ul>
               <li>  {item?.name}</li> 
               {/* <li>  {item?.id}</li>  */}

               
                  </ul>       
          </div>
            ))
            }
          </div>

         

         
      </body>
      {error && <label>{error}</label>}

      <div className="my_footer">
        <footer className="footer">
          <img src={myImg2} className="footer_image" />
        </footer>
      </div>
      {/* <label onClick={()=>navigate('/login')}>Home</label> */}
    </div>
  );
};

export default Home;
