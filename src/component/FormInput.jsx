import React, { useState } from 'react';

function OrderForm() {
  const [formData, setFormData] = useState({
    name: '',
    nohp: '',
    address: '',
    quantity: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Nama wajib diisi';
    if (!formData.nohp.trim()) newErrors.address = 'No Wahtsaap';
    if (!formData.address.trim()) newErrors.address = 'Alamat wajib diisi';
    if (!formData.quantity || formData.quantity <= 0) newErrors.quantity = 'Jumlah harus lebih dari 0';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      alert('Pesanan berhasil dikirim!');
      setFormData({ name: '', address: '', quantity: '', nohp: '' });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className='form-container'>
      <h2>Pesan Sekarang</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <input type='text' name='name' value={formData.name} onChange={handleChange} placeholder='Nama' />
          {errors.name && <span className='error'>{errors.name}</span>}
        </div>

        <div className='form-group'>
          <input name='address' value={formData.nohp} onChange={handleChange} placeholder='Nomer Whatsapp' />
          {errors.nohp && <span className='error'>{errors.nohp}</span>}
        </div>

        <div className='form-group'>
          <textarea name='address' value={formData.address} onChange={handleChange} placeholder='Alamat Pengiriman' />
          {errors.address && <span className='error'>{errors.address}</span>}
        </div>
        {/* <div className='form-group'>
          <input type='number' name='quantity' value={formData.quantity} onChange={handleChange} placeholder='Jumlah (kg)' min='1' />
          {errors.quantity && <span className='error'>{errors.quantity}</span>}
        </div> */}
        <button type='submit'>Kirim Pesanan</button>
      </form>
    </div>
  );
}

export default OrderForm;
