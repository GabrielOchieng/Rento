// "use client";

// import { useRef, useState } from "react";

// import { useCreateHouseMutation } from "@/redux/slices/housesApiSlice";

// import { useDispatch, useSelector } from "react-redux";
// import { toast } from "react-toastify";

// const HouseForm = () => {
//   const { userInfo } = useSelector((state) => state.auth);
//   console.log(userInfo);
//   const dispatch = useDispatch();
//   const [createHouse, { isloading }] = useCreateHouseMutation();
//   const [street, setStreet] = useState("");
//   const [town, setTown] = useState("");
//   const [estate, setEstate] = useState("");
//   const [address, setAddress] = useState("");
//   const [propertyType, setPropertyType] = useState("");
//   const [bedrooms, setBedrooms] = useState(0);
//   const [bathrooms, setBathrooms] = useState(0);
//   const [rentPrice, setRentPrice] = useState(0);
//   const [contactInfo, setContactInfo] = useState("");
//   const [description, setDescription] = useState("");
//   const [photos, setPhotos] = useState([]);

//   const hiddenFileInputRef = useRef(null);

//   const handlePhotoChange = (e) => {
//     const newPhotos = Array.from(e.target.files);
//     setPhotos([...newPhotos]); // Spread operator to create a new array
//   };

//   const handleClick = () => {
//     hiddenFileInputRef.current.click();
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!userInfo) return;
//     const houseData = {
//       street,
//       town,
//       estate,
//       address,
//       propertyType,
//       bedrooms,
//       bathrooms,
//       rentPrice,
//       contactInfo,
//       description,
//       landlord: userInfo.name, // Set landlord to logged-in user's ID
//       // photos, // Assuming backend handles photo upload
//     };

//     try {
//       await createHouse(houseData);
//       toast.success("House created successfully!");
//     } catch (error) {
//       toast.error("Error creating house!");
//       console.error(error); // Log the error for debugging
//     } finally {
//       // // Reset form state or perform any other cleanup actions
//       // setStreet("");
//       // setTown("");
//       // setEstate("");
//       // setAddress("");
//       // setPropertyType("");
//       // setBedrooms(0);
//       // setBathrooms(0);
//       // setRentPrice(0);
//       // setContactInfo("");
//       // setDescription("");
//       // setPhotos([]);
//       console.log(houseData);
//     }
//   };

//   return (
//     <div className="flex flex-col  gap-3 w-full bg-gray-300">
//       <div className="pt-4">
//         <h1 className="text-3xl font-bold text-center ">Add Your Property</h1>
//       </div>
//       <div>
//         <form className="space-y-4 w-[90%] mx-auto " onSubmit={handleSubmit}>
//           {/* Address Section */}
//           <h2>Address</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label
//                 htmlFor="street"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Street
//               </label>
//               <input
//                 type="text"
//                 id="street"
//                 name="street"
//                 required
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
//                 onChange={(e) => setStreet(e.target.value)}
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="town"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Town
//               </label>
//               <input
//                 type="text"
//                 id="town"
//                 name="town"
//                 required
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
//                 onChange={(e) => setTown(e.target.value)}
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="estate"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Estate (Optional)
//               </label>
//               <input
//                 type="text"
//                 id="estate"
//                 name="estate"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
//                 onChange={(e) => setEstate(e.target.value)}
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="zipcode"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Zipcode
//               </label>
//               <input
//                 type="text"
//                 id="zipcode"
//                 name="zipcode"
//                 required
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
//                 onChange={(e) => setAddress(e.target.value)}
//               />
//             </div>
//           </div>

//           {/* Property Type */}
//           <div>
//             <label
//               htmlFor="propertyType"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Property Type
//             </label>
//             <select
//               id="propertyType"
//               name="propertyType"
//               required
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
//               onChange={(e) => setPropertyType(e.target.value)}
//             >
//               <option value="">Select Property Type</option>
//               <option value="Apartment">Apartment</option>
//               <option value="House">House</option>
//               <option value="Bedsitter">Bedsitter</option>
//               <option value="Single">Single</option>
//               <option value="OneBedroom">One Bedroom</option>
//               <option value="TwoBedroom">Two Bedroom</option>
//               <option value="ThreeBedroom">Three Bedroom</option>
//               <option value="Home">Home</option>
//             </select>
//           </div>

//           {/* Bedrooms and Bathrooms */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label
//                 htmlFor="bedrooms"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Bedrooms
//               </label>
//               <input
//                 type="number"
//                 id="bedrooms"
//                 name="bedrooms"
//                 required
//                 min="1"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
//                 onChange={(e) => setBedrooms(e.target.value)}
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="bathrooms"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Bathrooms
//               </label>
//               <input
//                 type="number"
//                 id="bedrooms"
//                 name="bedrooms"
//                 required
//                 min="1"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
//                 onChange={(e) => setBathrooms(e.target.value)}
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="rentPrice"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Rent Price
//               </label>
//               <input
//                 type="number"
//                 id="rentPrice"
//                 name="rentPrice"
//                 required
//                 min="1"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
//                 onChange={(e) => setRentPrice(e.target.value)}
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="contactInfo"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Contact
//               </label>
//               <input
//                 type="string"
//                 id="contactInfo"
//                 name="contactInfo"
//                 required
//                 min="1"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
//                 onChange={(e) => setContactInfo(e.target.value)}
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="description"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Description
//               </label>
//               <textarea
//                 id="description"
//                 name="description"
//                 required
//                 rows={5}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
//                 onChange={(e) => setDescription(e.target.value)}
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="photo"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Photo
//               </label>
//               <div className="flex items-center space-x-4">
//                 <button onClick={handleClick}>Select Photos</button>
//                 <input
//                   type="file"
//                   id="photo"
//                   ref={hiddenFileInputRef}
//                   name="photo"
//                   accept="image/*"
//                   multiple
//                   onChange={handlePhotoChange}
//                 />
//               </div>
//             </div>

//             <div className="my-5 ">
//               <button
//                 type="submit"
//                 className="w-full  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
//               >
//                 Add Property
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default HouseForm;

"use client";

import { useRef, useState } from "react";
import axios from "axios";
import { useCreateHouseMutation } from "@/redux/slices/housesApiSlice";

import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const HouseForm = () => {
  const { userInfo } = useSelector((state) => state.auth);
  console.log(userInfo);

  const [street, setStreet] = useState("");
  const [town, setTown] = useState("");
  const [estate, setEstate] = useState("");
  const [address, setAddress] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [rentPrice, setRentPrice] = useState(0);
  const [photos, setPhotos] = useState([]); // Array of image URLs
  const [description, setDescription] = useState("");
  const [contactInfo, setContactInfo] = useState("");

  const dispatch = useDispatch();
  const [createHouse, { isloading }] = useCreateHouseMutation();

  // Hidden input to store previously selected files
  const hiddenFileInputRef = useRef(null);

  const handlePhotoChange = (e) => {
    const newPhotos = e.target.files;
    // for (let i = 0; i < e.target.files.length; i++) {
    //   newPhotos.push(e.target.files[i]);

    //   // newPhotos.push(URL.createObjectURL(e.target.files[i]));
    // }
    setPhotos([...photos, ...newPhotos]);
    console.log(newPhotos);
  };

  const handleClick = (e) => {
    hiddenFileInputRef.current.click();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(); // For handling image uploads
    formData.append("landlord", userInfo.name);
    formData.append("street", street);
    formData.append("town", town);
    formData.append("estate", estate);
    formData.append("address", address);
    formData.append("propertyType", propertyType);
    formData.append("bedrooms", bedrooms);
    formData.append("bathrooms", bathrooms);
    formData.append("rentPrice", rentPrice);
    formData.append("description", description);
    formData.append("contactInfo", contactInfo);

    // Handle image uploads (replace with your upload logic)
    for (let i = 0; i < photos.length; i++) {
      formData.append("photos", photos[i]);
    }

    try {
      const response = await createHouse(formData);
      if (response.error) {
        console.error("House creation error:", response.error);
        toast.error("An error occurred while adding the house.");
      } else {
        console.log("House created successfully:", response.data);
        toast.success("House added successfully!");
        // Reset form after successful submission (optional)

        setStreet("");
        // ... reset other fields
      }
    } catch (error) {
      console.error("House creation error:", error);
      toast.error("An error occurred while adding the house.");
    }
  };

  // Handle individual form field updates (similar for other fields)
  const handleAddressChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-col  gap-3 w-full bg-gray-300">
      <div className="pt-4">
        <h1 className="text-3xl font-bold text-center ">Add Your Property</h1>
      </div>
      <div>
        <form className="space-y-4 w-[90%] mx-auto " onSubmit={handleSubmit}>
          {/* Address Section */}
          <h2>Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="street"
                className="block text-sm font-medium text-gray-700"
              >
                Street
              </label>
              <input
                type="text"
                id="street"
                name="street"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="town"
                className="block text-sm font-medium text-gray-700"
              >
                Town
              </label>
              <input
                type="text"
                id="town"
                name="town"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                onChange={(e) => setTown(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="estate"
                className="block text-sm font-medium text-gray-700"
              >
                Estate (Optional)
              </label>
              <input
                type="text"
                id="estate"
                name="estate"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                onChange={(e) => setEstate(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="zipcode"
                className="block text-sm font-medium text-gray-700"
              >
                Zipcode
              </label>
              <input
                type="text"
                id="zipcode"
                name="zipcode"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>

          {/* Property Type */}
          <div>
            <label
              htmlFor="propertyType"
              className="block text-sm font-medium text-gray-700"
            >
              Property Type
            </label>
            <select
              id="propertyType"
              name="propertyType"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              onChange={(e) => setPropertyType(e.target.value)}
            >
              <option value="">Select Property Type</option>
              <option value="Apartment">Apartment</option>
              <option value="House">House</option>
              <option value="Bedsitter">Bedsitter</option>
              <option value="Single">Single</option>
              <option value="OneBedroom">One Bedroom</option>
              <option value="TwoBedroom">Two Bedroom</option>
              <option value="ThreeBedroom">Three Bedroom</option>
              <option value="Home">Home</option>
            </select>
          </div>

          {/* Bedrooms and Bathrooms */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="bedrooms"
                className="block text-sm font-medium text-gray-700"
              >
                Bedrooms
              </label>
              <input
                type="number"
                id="bedrooms"
                name="bedrooms"
                required
                min="1"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                onChange={(e) => setBedrooms(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="bathrooms"
                className="block text-sm font-medium text-gray-700"
              >
                Bathrooms
              </label>
              <input
                type="number"
                id="bedrooms"
                name="bedrooms"
                required
                min="1"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                onChange={(e) => setBathrooms(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="rentPrice"
                className="block text-sm font-medium text-gray-700"
              >
                Rent Price
              </label>
              <input
                type="number"
                id="rentPrice"
                name="rentPrice"
                required
                min="1"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                onChange={(e) => setRentPrice(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="contactInfo"
                className="block text-sm font-medium text-gray-700"
              >
                Contact
              </label>
              <input
                type="string"
                id="contactInfo"
                name="contactInfo"
                required
                min="1"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                onChange={(e) => setContactInfo(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="photo"
                className="block text-sm font-medium text-gray-700"
              >
                Photo
              </label>
              <div className="flex items-center space-x-4">
                <button onClick={handleClick}>Select Photos</button>
                <input
                  type="file"
                  id="photo"
                  ref={hiddenFileInputRef}
                  name="photo"
                  accept="image/*"
                  multiple
                  onChange={handlePhotoChange}
                />
              </div>
            </div>

            <div className="my-5 ">
              <button
                type="submit"
                className="w-full  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
              >
                Add Property
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HouseForm;
