import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import TopBanner from '../components/TopBanner';
import AudioPlayer from '../components/AudioPlayer';

const SecondPage = () => {
  const [data, setData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    if (editingIndex !== null) {
      const updated = [...data];
      updated[editingIndex] = formData;
      setData(updated);
      setEditingIndex(null);
    } else {
      setData([...data, formData]);
    }
    reset();
  };

  const handleDelete = (index) => {
    const updated = data.filter((_, i) => i !== index);
    setData(updated);
  };

  const handleEdit = (index) => {
    const item = data[index];
    for (let key in item) {
      setValue(key, item[key]);
    }
    setEditingIndex(index);
  };

  return (
    <div>
      <TopBanner />
      <AudioPlayer />
      <div className="bg-cover bg-center min-h-screen p-4" style={{ backgroundImage: 'url(/https://www.tirumala.org/images/TTD%20Trust%20Board%20Members/TTD-BOARD-PAGE-PIC.jpg)' }}>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-start">
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-xl shadow-md w-96">
            <input {...register('name', { required: true })} placeholder="Name" className="input" />
            {errors.name && <p className="text-red-500">Name is required</p>}

            <input {...register('aadhar', { required: true, pattern: /^\d{12}$/ })} placeholder="Aadhar Number" className="input" />
            {errors.aadhar && <p className="text-red-500">Valid Aadhar is required</p>}

            <input type="date" {...register('dob', { required: true })} className="input" />
            {errors.dob && <p className="text-red-500">Date of Birth is required</p>}

            <select {...register('gender', { required: true })} className="input">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            {errors.gender && <p className="text-red-500">Gender is required</p>}

            <input {...register('father', { required: true })} placeholder="Father Name" className="input" />
            {errors.father && <p className="text-red-500">Father Name is required</p>}

            <input {...register('address', { required: true })} placeholder="Address" className="input" />
            {errors.address && <p className="text-red-500">Address is required</p>}

            <input {...register('pin', { required: true, pattern: /^\d{6}$/ })} placeholder="Pin Code" className="input" />
            {errors.pin && <p className="text-red-500">Valid Pin Code is required</p>}

            <input {...register('mobile', { required: true, pattern: /^\d{10}$/ })} placeholder="Mobile Number" className="input" />
            {errors.mobile && <p className="text-red-500">Valid Mobile Number is required</p>}

            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded mt-4">Submit</button>
          </form>

          <div className="bg-white p-4 rounded-xl shadow-md w-96">
            {data.map((item, index) => (
              <div key={index} className="border-b pb-2 mb-2">
                <p><strong>Name:</strong> {item.name}</p>
                <p><strong>Aadhar:</strong> {item.aadhar}</p>
                <div className="flex gap-2 mt-2">
                  <button className="text-blue-500" onClick={() => handleEdit(index)}>Update</button>
                  <button className="text-red-500" onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
