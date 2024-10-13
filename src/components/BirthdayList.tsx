import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import '../styles/BirthdayList.css'; // Crie esse arquivo para estilização, se desejar
        

// Definição da interface do usuário
interface User {
  name: string;
  birthdate: string;
}

const BirthdayList: React.FC = () => {
  const [birthdays, setBirthdays] = useState<User[]>([]);
  
  useEffect(() => {
    const fetchBirthdays = async () => {
      try {
        const response = await axios.get<User[]>('https://back-site-acolitos.onrender.com/api/birthdays');
        setBirthdays(response.data);
      } catch (error) {
        console.error('Error fetching birthdays:', error);
      }
    };

    fetchBirthdays();
  }, []);
  
  const formatarData = (data: string | number | Date) => {
    return new Date(data).toLocaleDateString('pt-BR', { timeZone: 'UTC' });
  };

  return (
    <div className="birthday-list-container">
      <h2>Aniversariantes do Dia</h2>
      <DataTable value={birthdays} paginator rows={10} tableStyle={{ minWidth: '15rem' }}>
                <Column field="name" header="Nome" />
                <Column field="birthdate" header="Data de Nascimento" body={(rowData) => formatarData(rowData.birthdate)} />
            </DataTable>
            {birthdays.length === 0 && <p>Nenhum aniversariante hoje.</p>}
    </div>
  );
}

export default BirthdayList;
