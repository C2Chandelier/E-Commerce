import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Shipping() {
  const [frais, setFrais] = useState("");
  const [destination, setDestination] = useState("");
  const [username, setUsername] = useState("");
  //   const [data, setData] = useState({
  //     rate_options: {
  //       carrier_ids: ["se-105168"],
  //     },
  //     shipment: {
  //       validate_address: "no_validation",
  //       ship_to: {
  //         name: "Amanda Miller",
  //         phone: "555-555-5555",
  //         address_line1: "525 S Winchester Blvd",
  //         city_locality: "San Jose",
  //         state_province: "CA",
  //         postal_code: "95128",
  //         country_code: "US",
  //         address_residential_indicator: "yes",
  //       },
  //       ship_from: {
  //         company_name: "Example Corp.",
  //         name: "John Doe",
  //         phone: "111-111-1111",
  //         address_line1: "4009 Marathon Blvd",
  //         address_line2: "Suite 300",
  //         city_locality: "Austin",
  //         state_province: "TX",
  //         postal_code: "78756",
  //         country_code: "US",
  //         address_residential_indicator: "no",
  //       },
  //       packages: [
  //         {
  //           weight: {
  //             value: 1.0,
  //             unit: "ounce",
  //           },
  //         },
  //       ],
  //     },
  //   });

  

  /*
  setData(prevData => {
    return {
        ...prevData,
        shipment: {
            ...prevData.shipment,
            ship_from: {
                ...prevData.shipment.ship_from,
                company_name: "Nouvelle company name"
            }
        }
    }
  });
  */

//   const handleSubmit = async () => {
//     const config = {
//       headers: {
//         "API-Key": "TEST_y6tZz8S9QXG5v1lXh+0guG/nsWbFfK+THA9wR3ZODds",
//         "Content-Type": "application/json",
//       },
//     };
//     console.log("data = ", data);
//     try {
//       const response = await axios.post(
//         "https://api.shipengine.com/v1/rates/",
//         data,
//         config
//       );

//       // const response = await axios.get("https://api.shipengine.com/v1/carriers/", config)
//       console.log("response.data = ", response.data);
//     } catch (error) {
//       console.log("error = ", error);
//     }
//   };






  return (
    <div>
      <input
        type="text"
        className="form-control"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      ></input>
      <input
        type="text"
        className="form-control"
        onChange={(e) => setDestination(e.target.value)}
        value={destination}
      ></input>

      <button
        id="button"
        type="submit"
        className="btn btn-primary"
        // onClick={(e) => handleSubmit(e)}
      >
        Envoyer
      </button>
    </div>
  );
}

export default Shipping;
