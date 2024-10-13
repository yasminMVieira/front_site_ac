import React, { useState } from 'react';
import axios from 'axios';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Nullable } from 'primereact/ts-helpers';

const RegisterForm: React.FC = () => {
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState<Date | null>(null);
  const [email, setEmail] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/users', { name, birthdate, email });
      alert('Usuário cadastrado com sucesso!');
    } catch (error) {
      alert('Erro ao cadastrar usuário');
    }
  }
  
   // Função para formatar a data como dd/mm/yyyy
   const formatarData = (data: Nullable<Date>) => {
    if (!data) return '';
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
};

  return (
    <div className="flex align-items-center justify-content-center">
      <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
          <div className="text-center mb-5">
              <img src={`${process.env.PUBLIC_URL}/logo_acolito.png`} alt="hyper" height={150} className="mb-3" />
              {/* <div className="text-900 text-3xl font-medium mb-3">Cadastro</div> */}
          </div>

    {/* <div className="register-container"> */}
      <form className="register-form" onSubmit={handleSubmit}>
      <div>
            <label htmlFor="name" className="block text-900 font-medium mb-2">Nome</label>
            <InputText id="name" type="text" placeholder="Nome Completo" className="w-full mb-3" onChange={(e) => setName(e.target.value)}/>

            <label htmlFor="birthdate" className="block text-900 font-medium mb-2">Data de Nascimento</label>
            <Calendar id="birthdate" className="w-full mb-3" placeholder="dd/mm/yyyy" dateFormat="dd/mm/yy" onChange={(e) => setBirthdate(e.value as Date | null)} />

            <label htmlFor="email" className="block text-900 font-medium mb-2">E-mail</label>
            <InputText id="email" type="text" placeholder="E-mail" className="w-full mb-3" onChange={(e) => setEmail(e.target.value)} />

            <Button label="Cadastrar" icon="pi pi-user-plus" className="w-full" type='submit' />
        </div>
      </form>
    </div>
    </div>
  );
}

export default RegisterForm;


    