import React, { useState } from 'react';
import './style.css';
import { Form, FormValues } from '../components/Form';
import { Card } from '../components/Card';

export const App: React.FC = () => {
  const [formValue, setFormValue] = useState<FormValues[]>([]);
  return (
    <div className="App">
      <Form setFormValue={setFormValue} />
      <main>
        {formValue.map((item, idx: number) => {
          return <Card item={item} key={idx} />;
        })}
      </main>
    </div>
  );
};
